import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import config from '../website-config';
import AOS from 'aos';

import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from '@readable/lib/withApollo';
import { useGetUsersViewModel } from '@readable/components/GetUser/useGetUsersViewModel.query';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

const StyledPage = styled.div`
  .page {
  }
`;

export function Home() {
  const viewModel = useGetUsersViewModel();

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
      <Head>
        <title>{config.title}</title>
      </Head>
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

export default withApollo(Home, { getDataFromTree });
