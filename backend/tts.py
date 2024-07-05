from gtts import gTTS
from app import app

classification = "transaction"

if (classification == "transaction"):
    tts = gTTS('Your transcation has been succesfully made')
elif (classification == "interest rates"):
    tts = gTTS('Your current interest rate on your savings account is 5.5%')
elif (classification == "scam check"):
    tts = gTTS("Scams can take various forms, but some prevalent ones include online shopping scams, phishing scams, investment scams and tech support scams.")
elif (classification == "unknown intent"):
    tts = gTTS('Sorry, I cannot help you with this today. Is there something else I can do')

tts.save('audio.mp3')