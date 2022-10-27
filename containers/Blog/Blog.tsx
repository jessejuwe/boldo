import React from 'react';
import Image from 'next/future/image';
import { motion } from 'framer-motion';

import { CATEGORIES } from '../../helpers/helpers';
import { Button } from '../../exports/exports';

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="blog">
      <h3 className="light-text">Our Blog</h3>
      <h2 className="head-text">
        Value proposition accelerator product management venture
      </h2>
      <div className="categories">
        {CATEGORIES.map(category => (
          <div key={Math.floor(Math.random() * 100)} className="category">
            <Image
              src={category.image}
              alt={category.category}
              className="category-image"
            />
            <div className="categories-label">
              <p className="p-text">{category.category}</p>
              <p className="p-text">{category.date}</p>
            </div>
            <p className="category-message">{category.message}</p>
            <div className="categories-icon">
              <Image src={category.icon} alt={category.name} />
              <p className="p-text">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
      <Button buttonStyle="btn--outline-inverse">Load more</Button>
    </div>
  );
};

export default Blog;
