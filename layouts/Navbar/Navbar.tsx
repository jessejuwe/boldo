import React, { useState } from 'react';
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

import { images } from '../../constants';
import Button from '../../components/Buttons/Buttons';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(!toggle);

  return (
    <div className="app__navbar">
      <div className="app__logo">
        <Image src={images.logoLight} alt="Logo" />
      </div>

      <ul className="app__nav__list">
        <Link href="products" className="nav__list-item">
          Products
        </Link>
        <Link href="services" className="nav__list-item">
          Services
        </Link>
        <Link href="about" className="nav__list-item">
          About
        </Link>
        <Link href="login" className="nav__list-item">
          <a href="/login">
            <Button buttonSize="btn--medium" buttonColor="white">
              Login
            </Button>
          </a>
        </Link>
      </ul>

      <div className="app__navbar-menu">
        <FaBars onClick={toggleHandler} />
        {toggle ? (
          <motion.div
            // initial={{ x: 300 }}
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <FaTimes onClick={toggleHandler} />
            <ul className="app__nav__list">
              <Link href="products" className="nav__list-item">
                Products
              </Link>
              <Link href="services" className="nav__list-item">
                Services
              </Link>
              <Link href="about" className="nav__list-item">
                About
              </Link>
              <Link href="login" className="nav__list-item">
                <Button buttonSize="btn--medium" buttonColor="white">
                  Login
                </Button>
              </Link>
            </ul>
          </motion.div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Navbar;
