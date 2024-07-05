import { Button } from "@westpac/ui";
import { CloseIcon, ProgressIcon, VoiceIcon } from "@westpac/ui/icon";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import sound from "../../../sound/audio.mp3";

const VoiceAssist = () => {
  const [recordingStatus, setRecordingStatus] = useState<
    "inactive" | "recording" | "pause"
  >("inactive");
  const [response, setResponse] = useState("");

  const respond = (response: any) => {
    const audio = new Audio(response);
    audio.play();
  };

  const startVoiceChat = () => {
    // respond(greeting);
    setRecordingStatus("recording");
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechRecognitionEvent =
      window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const recognition = new SpeechRecognition();
      recognition.start();

      recognition.onspeechend = () => {
        recognition.stop();
        console.log("stopped!");
        setRecordingStatus("pause");
      };
      recognition.onresult = async (e: any) => {
        console.log(e.results[0][0]);
        //call to the backend for AI to process
        if (e.results[0][0]?.transcript) {
          await axios.post("http://127.0.0.1:5000/get-intent", {
            text: e.results[0][0].transcript,
          });
          respond(sound);
        } else {
          alert("sorry something went wrong!");
        }
        setRecordingStatus("inactive");
      };
    } else {
      alert("Speech Recognition is not supported on this browser");
    }
  };
  const endVoiceChat = () => {
    setRecordingStatus("inactive");
  };
  return (
    <>
      {recordingStatus === "inactive" ? (
        <Button onClick={startVoiceChat} iconBefore={VoiceIcon}>
          LiveChat
        </Button>
      ) : recordingStatus === "pause" ? (
        <Button iconBefore={ProgressIcon}>Loading...</Button>
      ) : (
        <Button onClick={endVoiceChat} iconBefore={CloseIcon}>
          Listening...
        </Button>
      )}
    </>
  );
};

export default VoiceAssist;
