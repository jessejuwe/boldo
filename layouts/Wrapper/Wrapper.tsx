import React, { ReactNode } from 'react';
import { Footer, Navbar } from '../../exports/exports';

type Props = { children: ReactNode };

const Wrapper = (props: Props) => {
  return (
    <div className="app__wrap">
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
