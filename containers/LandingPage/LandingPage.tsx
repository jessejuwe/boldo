import React from 'react';
import Image from 'next/future/image';
import { motion } from 'framer-motion';

import { Navbar, Button } from '../../exports/exports';
import { images } from '../../constants';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="landing__page">
      <Image src={images.ellipse} alt="ellipse" className="ellipse" />
      <Navbar />

      <div className="section">
        <motion.div
          className="left-section"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 2,
          }}
        >
          <h2 className="head-text">
            Save time by building
            <br />
            fast with Boldo template
          </h2>
          <p className="p-text">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="lp-buttons">
            <Button buttonStyle="btn--secondary" buttonSize="btn--large">
              Buy template
            </Button>
            <Button buttonSize="btn--large" buttonStyle="btn--outline">
              Explore
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="right-section"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 2,
          }}
        >
          <Image src={images.heroGraphics} alt="hero-graphics" />
        </motion.div>
      </div>

      <motion.div
        className="logo-wall"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delayChildren: 2,
        }}
      >
        <Image src={images.logoWall} alt="logo wall" />
      </motion.div>
    </div>
  );
};

export default LandingPage;
