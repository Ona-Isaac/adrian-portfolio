'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-col flex-row gap-8`}
    >
      <div>
        <motion.div>
          <motion.div
            className="flex lg:flex-row flex-col justify-center items-center"
          >
            <motion.div
              variants={slideIn('left', 'tween', 0.2, 1)}
              className={`flex-1 ${styles.flexCenter}`}
            >
              <img
                src="developer.png"
                alt="cover"
                className="w-70px h-auto z-10 relative"
              />
            </motion.div>
            <motion.div
              variants={fadeIn('down', 'tween', 0.3, 1)}
              className="flex-[0.75] flex justify-center flex-col"
            >
              <motion.p className="text-white">Hi</motion.p>
              <motion.h1 className="font-bold lg:text-[60px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[100px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] text-white">
                I'm Adrian <br /> A FRONT-END DEVELOPER
              </motion.h1>
              <TypingText title="Frontend development is a place where" />
              <TypingText title="artistry meets innovation." />
              <TypingText title="Join me as I embrace the web as a black" />
              <TypingText title="canvas and let creativity flow." />
              <TypingText title="A well-designed interface can touch" />
              <TypingText title="millions of lives." />
              <TypingText title="I am the architect of the digital realm," />
              <TypingText title="shaping the world." />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  </section>

);

export default Hero;
