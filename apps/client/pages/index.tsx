import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { GetUsersViewController } from '@readable/components/GetUser/GetUsersViewController';
import withApollo from '@readable/lib/withApollo';
import { SocialLoginButton } from '@readable/components/SocialLoginButton';
import { useGetUsersViewModel } from '@readable/components/GetUser/useGetUsersViewModel.query';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

import AOS from 'aos';

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
    // <>
    //   <GetUsersViewController viewModel={viewModel} />
    //   <div className="w-full p-4">
    //     <main role="main" className="w-full flex flex-col h-screen content-center justify-center">
    //       <div
    //         onClick={() => {
    //           console.log('hihihi');
    //         }}
    //         className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto"
    //       >
    //         <img
    //           src="https://user-images.githubusercontent.com/365500/122947722-572c6280-d3b5-11eb-9b18-f8e0e2f79e3b.png"
    //           alt="symbol"
    //           style={{ width: '300 px' }}
    //         />
    //         <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    //           <SocialLoginButton provider="google" />
    //           <SocialLoginButton provider="facebook" />
    //           <SocialLoginButton provider="github" />
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </>

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

export default withApollo(Home, { getDataFromTree });
