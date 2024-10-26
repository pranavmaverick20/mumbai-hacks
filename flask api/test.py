# test.py
import requests
import base64

# Replace this with the path to your image file
image_path = "OIP.jpg"

# Read the image and encode it to base64
with open(image_path, "rb") as image_file:
    base64_image = base64.b64encode(image_file.read()).decode('utf-8')

# Prepare the request payload
data = {
    "prompt": "Describe this image.",
    "image": base64_image
}

# Send a POST request to the Flask application
response = requests.post("http://127.0.0.1:5000/describe_image", json=data)

# Print the response
print(response.json())