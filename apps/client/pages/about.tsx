import React, { useEffect } from 'react';
import DemoPage from '@readable/components/templates/DemoPage';
import { useRouter } from 'next/router';

export function About() {
  const router = useRouter();

  return <DemoPage />;
}

export default About;
