import "./App.css";
import VideoPlayer from "./Components/VideoPlayer";
import { useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying((prevIsPlaying) => !prevIsPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      ;
    </>
  );
}

export default App;
