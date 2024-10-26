import axios from 'axios';
import React, { useState } from 'react'

const Predictor = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [responseData, setResponseData] = useState(null);
  
    // Convert image file to Base64
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]); // Get only the Base64 part
        reader.onerror = (error) => reject(error);
      });
    };
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!selectedFile || !prompt) {
        alert("Please provide a prompt and select an image.");
        return;
      }
  
      try {
        // Convert the selected image to Base64 format
        const base64Image = await convertToBase64(selectedFile);
  
        // Prepare the data to send to the Flask API
        const data = {
          prompt,
          image: base64Image,
        };
  
        // Send the data to the Flask backend
        const response = await axios.post("http://127.0.0.1:5000/describe_image", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        // Store the response from the API
        setResponseData(response.data.description);
      } catch (error) {
        console.error("Error:", error);
        setResponseData("Failed to get description from API.");
      }
    };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Describe an Image</h2>

        <input
          type="text"
          placeholder="Enter a prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-400"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-4"
          required
        />

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>

        {responseData && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            <p>Response from API: {responseData}</p>
          </div>
        )}
      </form>
    </div>
    </>
  )
}

export default Predictor
