from flask import Flask, request, jsonify
from flask_cors import CORS
from pydub.playback import play
from transformers import GPT2Tokenizer, GPT2ForSequenceClassification
import torch
from gtts import gTTS

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
CORS(app)  # Enable CORS for all routes

# Load the GPT-2 tokenizer and model
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2ForSequenceClassification.from_pretrained('gpt2')

@app.route('/get-intent', methods=['POST'])
def get_intent():
    input_text = request.json.get('text')
    if not input_text:
        return jsonify({"error": "No input text provided"}), 400

    # Tokenize input text
    inputs = tokenizer(input_text, return_tensors='pt')

    # Perform inference
    with torch.no_grad():
        outputs = model(**inputs)

    # Get the predicted label (replace with your specific labels)
    predicted_label = outputs.logits.argmax().item()

    print(input_text)
    # Determine the response based on the predicted intent
    if predicted_label == 0:
        classification = "transaction"
    elif predicted_label == 1:
        classification = "interest rates"
    elif predicted_label == 2:
        classification = "scam check"
    else:
        classification = "unknown intent"

    # Generate the response
    if classification == "transaction":
        tts = gTTS('Your transaction has been successfully made')
    elif classification == "interest rates":
        tts = gTTS('Your current interest rate on your savings account is 5.5%')
    elif classification == "scam check":
        tts = gTTS("Scams can take various forms, but some prevalent ones include online shopping scams, phishing scams, investment scams, and tech support scams.")
    elif classification == "unknown intent":
        tts = gTTS('Sorry, I cannot help you with this today. Is there something else I can do?')

    print(classification)
    # Save the audio file
    tts.save('../sound/audio.mp3')

    # Optionally, return the classification for further use
    return classification

if __name__ == '__main__':
    app.run(debug=True)
