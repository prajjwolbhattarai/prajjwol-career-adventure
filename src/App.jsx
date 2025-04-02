import React from 'react';
import HeroScreen from './components/HeroScreen';
import WorldMap from './components/WorldMap';
import ResumeStats from './components/ResumeStats';
import Avatar from './components/Avatar';
import MusicPlayer from './components/MusicPlayer';
import ChatbotSlot from './components/ChatbotSlot';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-sky-200 overflow-x-hidden">
      <HeroScreen />
      <WorldMap />
      <ResumeStats />
      <Avatar isWalking={true} />
      <MusicPlayer />
      <SocialLinks />
      <ChatbotSlot />
    </div>
  );
}

export default App;
