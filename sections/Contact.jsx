'use client';

import '../styles/globals.css';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Contact = () => (
  <>
    <Head>
      <title>| Contact page</title>
      <meta name="description" content="any description" />
    </Head>
    <main className={`${styles.paddings} relative z-10 bg-black overflow-hidden>`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="fonr-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Ona Isaac
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              AKA | Adrian
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            "With the advancement of today's technology, our only limit is our
            imagination"
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="/pexels.jpg"
            alt="landscape"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <img
              src="/developer.png"
              alt="developer"
              className="w-[155] h-[155px] rounded-[50px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  </>
);

export default Contact;
