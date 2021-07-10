import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from '@readable/components/modules/Header';
import HeroHome from '@readable/components/modules/HeroHome';
import Footer from '@readable/components/modules/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}
