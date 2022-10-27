import type { NextPage } from 'next';
import Head from 'next/head';

import { LandingPage, Services, Testimonials, Blog } from '../exports/exports';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Boldo</title>
        <meta
          name="Boldo"
          content="Save time by building fast with Boldo template"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="">
        <LandingPage />
        <Services />
        <Testimonials />
        <Blog />
      </main>
    </div>
  );
};

export default Home;
