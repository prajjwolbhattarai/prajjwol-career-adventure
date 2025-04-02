import React from 'react';

const stats = [
  { label: 'Creativity', value: 97 },
  { label: 'Automation', value: 100 },
  { label: 'Ad Strategy', value: 95 },
  { label: 'Leadership', value: 96 },
];

function ResumeStats() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-purple-100 p-8">
      <h2 className="text-3xl font-bold mb-6">Final Boss Castle – Stat Sheet</h2>
      <div className="grid grid-cols-2 gap-4 max-w-md w-full">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white px-4 py-3 rounded-lg shadow-md w-full text-center"
          >
            <h3 className="font-semibold text-xl">{stat.label}</h3>
            <p className="text-2xl">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResumeStats;
