const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const { TWILIO_AUTHTOKEN, TWILIO_ASID, GEMINI_KEY } = require('./environment');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


//make code more modular later

const app = express();
const port = 5001;

const accountSid = TWILIO_ASID;
const authToken = TWILIO_AUTHTOKEN;
const client = twilio(accountSid, authToken);

// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

const getResponse = async (message) => {

    message = "dont include the prompt i gave you assume whatever mode of transport suitable one way do not say its difficult just answer in less than 1600 characters and dont use bold text dont tell me too much just give me an estimate tell me how much carbon footprint is generated in whatever accepted unit\n answer in the format approx XYZ tons/(or any measurement)" + message;
    //const result = await model.generateContent("in less than 1600 characters and dont use bold charactersand *" + message);
    console.log(result.response.text());
    return result.response.text();

}


app.post('/whatsapp', async (req, res) => {
    console.log("hi");
    const message = req.body.Body;
    const from = req.body.From;
    if (message == "Hi") {
        replyMessage = "Hi, Welcome to Leaflytic!\nI am your personal chatbot, kindly tell me about your transactions"
    }
    else {
        replyMessage = await getResponse(message);
    }


    console.log(replyMessage);


    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: replyMessage,
            to: from,
        })
        .then(message => {
            console.log(`Message sent with ID: ${message.sid}`);
            res.sendStatus(200);
        })
        .catch(err => console.error(err));

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`WhatsApp bot running on http://localhost:${port}`);
});
