import React from 'react';

function World({ title, achievements, background }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center" style={{ backgroundColor: background }}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <ul className="space-y-2 max-w-md text-left">
        {achievements.map((text, index) => (
          <li key={index} className="bg-white rounded-xl px-4 py-2 shadow">
            ⭐ {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default World;
