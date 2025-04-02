import React from 'react';

function HeroScreen() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 text-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Prajjwol Bhattarai's Excellent Adventure
      </h1>
      <p className="text-lg md:text-2xl mb-6">
        Career Edition — Powered by Creativity, Code & Campaigns
      </p>
      <a
        href="#world-map"
        className="bg-red-500 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-red-600 transition"
      >
        Start Adventure
      </a>
    </section>
  );
}

export default HeroScreen;
