'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './icons';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Work with me</h4>
        <a href="mailto:isaacona2@gmail.com">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
            <img src="/message.png" alt="message" className="w-[24px] h-[24px]" />
            <span className="font-normal text-[16px] text-white">Reach out today</span>
          </button>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Adrian</h4>
          <motion.div whileHover={{ y: -2 }} className="flex items-center justify-center flex-wrap gap-4">
            <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.5 }} className="w-6">
              <TwitterIcon />
            </motion.a>
            <motion.a href="https://github.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.5 }} className="w-6 bg-white rounded-full">
              <GithubIcon />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.5 }} className="w-6">
              <LinkedInIcon />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
