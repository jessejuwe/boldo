import React from 'react';
import Image from 'next/future/image';

import { images } from '../../constants';
import { Button } from '../../exports/exports';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="footer-head">
        <Image src={images.ellipse2} alt="ellipse" />
        <div className="footer-head-text">
          <h2 className="head-text">
            An enterprise template to ramp up your company website
          </h2>
        </div>
        <div className="footer-form">
          <input type="text" placeholder="Your email address" />
          <Button buttonStyle="btn--secondary">Start now</Button>
        </div>
      </div>

      <div className="footer-tail">
        <div className="footer-detail">
          <Image src={images.logoDark} alt="logo" />
          <p className="light-text">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="light-text">All rights reserved.</p>
        </div>
        <div className="footer-info">
          <div className="landings">
            <h4 className="bold-text">Landings</h4>
            <p className="light-text">Home</p>
            <p className="light-text">Products</p>
            <p className="light-text">Services</p>
          </div>
          <div className="company">
            <h4 className="bold-text">Company</h4>
            <p className="light-text">Home</p>
            <p className="light-text">Careers</p>
            <p className="light-text">Services</p>
          </div>
          <div className="resources">
            <h4 className="bold-text">Resources</h4>
            <p className="light-text">Blog</p>
            <p className="light-text">Products</p>
            <p className="light-text">Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
