# app.py
from flask import Flask, request, jsonify
import base64
from groq import Groq

app = Flask(__name__)

# Function to handle image processing and model response
def get_image_description(prompt, base64_image):
    client = Groq(api_key="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")
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}",
                        },
                    },
                ],
            }
        ],
        model="llava-v1.5-7b-4096-preview",
    )
    return chat_completion.choices[0].message.content

@app.route("/describe_image", methods=["POST"])
def describe_image():
    data = request.json
    prompt = data.get("prompt")
    image_data = data.get("image")

    if not prompt or not image_data:
        return jsonify({"error": "Invalid input"}), 400

    # Process image description
    try:
        description = get_image_description(prompt, image_data)
        return jsonify({"description": description})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)