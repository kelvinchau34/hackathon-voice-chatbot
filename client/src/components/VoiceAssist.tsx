import { Button } from "@westpac/ui";
import { CloseIcon, VoiceIcon } from "@westpac/ui/icon";
import { useEffect, useRef, useState } from "react";
import { LiveAudioVisualizer } from "react-audio-visualize";

const VoiceAssist = () => {
  const [recordingStatus, setRecordingStatus] = useState<
    "inactive" | "recording" | "pause"
  >("inactive");
  const startVoiceChat = () => {
    setRecordingStatus("recording");
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
      ) : (
        <Button onClick={endVoiceChat} iconBefore={CloseIcon}>
          Listening...
        </Button>
      )}
    </>
  );
};

export default VoiceAssist;
