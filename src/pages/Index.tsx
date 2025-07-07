
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WorkSection from '../components/WorkSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
    </Layout>
  );
};

export default Index;
