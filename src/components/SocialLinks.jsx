import React from 'react';

function SocialLinks() {
  return (
    <footer className="w-full text-center py-6 bg-sky-100">
      <p className="mb-2 font-bold">Connect with me:</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/prajjwol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://yourportfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline"
        >
          Portfolio
        </a>
        <a
          href="/resume.pdf"
          className="text-green-600 hover:underline"
          download
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
}

export default SocialLinks;
