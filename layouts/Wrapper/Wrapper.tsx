import React, { ReactNode } from 'react';
import { Footer, Navbar } from '../../exports/exports';

type Props = { children: ReactNode };

const Navigation = (props: Props) => {
  return (
    <div className="w-full">
      <main className="w-full">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Navigation;
