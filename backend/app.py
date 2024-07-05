from flask import Flask, request, jsonify
from flask_cors import CORS
from pydub.playback import play
from transformers import GPT2Tokenizer, GPT2ForSequenceClassification
import torch

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
CORS(app)  # Enable CORS for all routes

# Load the GPT-2 tokenizer and model
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2ForSequenceClassification.from_pretrained('gpt2')

# Define function for intent recognition
def get_intent(input_text):
    # Tokenize input text
    inputs = tokenizer(input_text, return_tensors='pt')

    # Perform inference
    with torch.no_grad():
        outputs = model(**inputs)

    # Get the predicted label (replace with your specific labels)
    predicted_label = outputs.logits.argmax().item()

    # Return the predicted intent (adjust according to your label mapping)
    if predicted_label == 0:
        return "Transaction"
    elif predicted_label == 1:
        return "Check Interest rates"
    elif predicted_label == 2:
        return "Scam Sheck"
    else:
        return "Unknown Intent"


if __name__ == '__main__':
    app.run(debug=True)
