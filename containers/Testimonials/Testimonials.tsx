import React from 'react';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaChevronCircleDown } from 'react-icons/fa';

import { TESTIMONIALS } from '../../helpers/helpers';
import { images } from '../../constants';

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-head">
          <h2 className="head-text">
            An enterprise template to ramp up your company website
          </h2>
          <div className="testimonial-nav">
            <div className="nav-left">
              <FaArrowLeft />
            </div>
            <div className="nav-right">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="testimonial-list">
          {TESTIMONIALS.map(item => (
            <div
              key={Math.floor(Math.random() * 100)}
              className="testimonial-list-item"
            >
              <h4>{`"${item.message}"`}</h4>
              <div className="testimonial-list-item-info">
                <div className="testimonial-list-item-info-img">
                  <Image src={item.image} alt={item.name} />
                </div>
                <div className="testimonial-list-item-info-detail">
                  <h3>{item.name}</h3>
                  <p>{item.work}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="customer-connect">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 2,
          }}
        >
          <Image src={images.connect} alt="connect" />
        </motion.div>
        <div className="connect-info">
          <motion.h3
            className="heading-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{
              type: 'tween',
              duration: 1,
              ease: 'easeInOut',
              delayChildren: 2,
            }}
          >
            We connect our customers with the best, and help them keep up-and
            stay open.
          </motion.h3>
          <motion.div
            className="connect-info-detail"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <div>
              <p>We connect our customers with the best?</p>
              <FaChevronCircleDown />
            </div>
            <div>
              <p>Android research & development rockstar?</p>
              <FaChevronCircleDown />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
