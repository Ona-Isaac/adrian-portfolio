'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';
import Logo from './Logo';

const Navbar = () => (
  <motion.header
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.innerWidth} mx-auto flex lg:flex-col flex-row gap-8 lg:p-6 px-4 py-4 relative z-10`}
  >
    <Logo />
  </motion.header>
);

export default Navbar;
