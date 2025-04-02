import React, { useEffect, useRef, useState } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      playing ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [playing]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setPlaying(!playing)}
        className="bg-white text-sm px-3 py-1 rounded shadow hover:bg-gray-100"
      >
        {playing ? '🔊 Mute' : '🔈 Play'}
      </button>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default MusicPlayer;
