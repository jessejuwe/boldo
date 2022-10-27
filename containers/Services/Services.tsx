import React from 'react';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaFeather, FaEye, FaSun } from 'react-icons/fa';

import { FEATURES } from '../../helpers/helpers';
import { images } from '../../constants';
import { Button } from '../../exports/exports';

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="services">
      <h4 className="light-text">Our Services</h4>
      <h2 className="head-text">
        Handshake infographic mass market
        <br /> crowdfunding iteration.
      </h2>

      <div className="features-group">
        {FEATURES.map(feature => (
          <div key={Math.floor(Math.random() * 100)} className="features">
            <Image src={feature.image} alt={feature.title} />
            <h4 className="heading">{feature.title}</h4>
            <p className="light-text">{feature.text}</p>
            <div className="feature-nav">
              <p className="bold-text">{feature.navigate}</p>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>

      <div className="connect-1">
        <motion.div
          className="connect-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 2,
          }}
        >
          <Image src={images.feature4} alt="connect-image" />
        </motion.div>
        <motion.div
          className="connect-offers"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 2,
          }}
        >
          <h3 className="heading-2">
            We connect our customers
            <br /> with the best, and help them
            <br /> keep up-and stay open.
          </h3>
          <div className="connect-offer-group">
            <div className="connect-svg app__flex">
              <FaCheck />
            </div>
            <p>We connect our customers with the best.</p>
          </div>
          <div className="connect-offer-group">
            <div className="connect-svg app__flex">
              <FaCheck />
            </div>
            <p>Advisor success customer launch party.</p>
          </div>
          <div className="connect-offer-group">
            <div className="connect-svg app__flex">
              <FaCheck />
            </div>
            <p>Business-to-consumer long tail.</p>
          </div>
          <Button buttonSize="btn--medium" buttonColor="primary">
            Start now
          </Button>
        </motion.div>
      </div>

      <div className="connect-2">
        <motion.div
          className="connect-offers"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 2,
          }}
        >
          <h3 className="heading-2">
            We connect our customers
            <br /> with the best, and help them
            <br /> keep up-and stay open.
          </h3>
          <div className="connect-offer-group bg-primary rounded text-white">
            <FaFeather />
            <p>We connect our customers with the best.</p>
          </div>
          <div className="connect-offer-group dark-icon">
            <FaEye />
            <p>Advisor success customer launch party.</p>
          </div>
          <div className="connect-offer-group dark-icon">
            <FaSun />
            <p>Business-to-consumer long tail.</p>
          </div>
        </motion.div>
        <motion.div
          className="connect-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 2,
          }}
        >
          <Image src={images.feature5} alt="connect-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
