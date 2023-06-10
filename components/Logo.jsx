import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const MotionLink = motion(Link);
const Logo = () => (
  <div className="flex items-center justify-center mt-2">
    <MotionLink
      href=""
      className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-full text-2xl font-bold"
      whileHover={{
        scale: 1.05,
        backgroundColor: [
          '#ffffff',
          'rgba(131,58,180,1)',
          'rgba(253,29,29,1)',
          'rgba(252,176,69,1)',
          'rgba(131,58,180,1)',
          '#ffffff',
        ],
        transition: { duration: 1, repeat: Infinity },
      }}
    >
      AD
    </MotionLink>
  </div>
);

export default Logo;
