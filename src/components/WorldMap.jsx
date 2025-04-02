import React from 'react';
import { worlds } from '../data/worlds';
import World from './World';

function WorldMap() {
  return (
    <section
      id="world-map"
      className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-screen"
    >
      {worlds.map((world) => (
        <div
          key={world.id}
          className="snap-center flex-shrink-0 w-screen h-full flex items-center justify-center bg-green-100 p-6"
        >
          <World {...world} />
        </div>
      ))}
    </section>
  );
}

export default WorldMap;
