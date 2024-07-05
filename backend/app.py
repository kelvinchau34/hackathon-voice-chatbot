from flask import Flask, request, jsonify
from flask_cors import CORS
from pydub import AudioSegment
from pydub.playback import play
from flask_socketio import SocketIO, emit
import whisper
import os
import logging

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'  
CORS(app)  # Enable CORS for all routes

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'audio' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['audio']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Save uploaded file
        audio_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(audio_path)

        return jsonify({'message': 'File uploaded successfully', 'filename': file.filename}), 200
    except Exception as e:
        logging.error(f'Failed to upload file: {str(e)}')
        return jsonify({'error': f'Failed to upload file: {str(e)}'}), 500

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['audio']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Save uploaded file
        audio_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(audio_path)

        # Perform transcription using Whisper or any other service
        model = whisper.load_model("base")
        text = model.transcribe(audio_path, fp16=False )  # Replace with your transcription method

        return jsonify({'transcription': text}), 200

    except FileNotFoundError:
        logging.error('File not found during transcription')
        return jsonify({'error': 'File not found during transcription'}), 500

    except Exception as e:
        logging.error(f'Transcription failed: {str(e)}')
        return jsonify({'error': f'Transcription failed: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)