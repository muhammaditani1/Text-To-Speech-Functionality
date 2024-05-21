import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";

export default function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <span>
        Please use a different browser that supports speech recognition.
      </span>
    );
  }

  if (!isMicrophoneAvailable) {
    return <span>Please make sure the microphone is available.</span>;
  }

  return (
    <div className="container">
      <h2>{listening ? "Stop Recording" : "Start Recording"}</h2>
      <h1>{transcript}</h1>
      <button
        className="start"
        onClick={() => SpeechRecognition.startListening()}
      >
        Start
      </button>
      <button
        className="stop"
        onClick={() => SpeechRecognition.stopListening()}
      >
        Stop
      </button>
      <button className="reset" onClick={resetTranscript}>
        Reset
      </button>
    </div>
  );
}
