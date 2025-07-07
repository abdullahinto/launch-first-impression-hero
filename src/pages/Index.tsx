
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WorkSection from '../components/WorkSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <Footer />
    </Layout>
  );
};

export default Index;
