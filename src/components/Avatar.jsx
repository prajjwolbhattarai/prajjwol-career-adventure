import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avatarIdle from '../../public/avatar-idle.png';
import avatarWalk1 from '../../public/avatar-walk1.png';
import avatarWalk2 from '../../public/avatar-walk2.png';

const walkCycle = [avatarWalk1, avatarWalk2];

function Avatar({ isWalking = true }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!isWalking) return;
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % walkCycle.length);
    }, 200);
    return () => clearInterval(interval);
  }, [isWalking]);

  const currentSprite = isWalking ? walkCycle[frame] : avatarIdle;

  return (
    <motion.img
      src={currentSprite}
      alt="Prajjwol Avatar"
      className="absolute bottom-8 left-10 w-16 h-16"
      animate={isWalking ? { y: [0, -2, 0] } : { y: 0 }}
      transition={{ repeat: Infinity, duration: 0.4 }}
    />
  );
}

export default Avatar;
