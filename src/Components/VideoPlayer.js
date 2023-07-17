import React, { useEffect, useRef } from "react";

export default function VideoPlayer({ src, isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) videoRef.current.play();
    else videoRef.current.pause();
  }, [isPlaying]);

  return <video ref={videoRef} src={src} loop playsInline />;
}
