import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Features from '@sections/Features';
import Protocols from '@sections/Protocols';
import Team from '@sections/Team';
import Faq from '@sections/FAQ';
// import SignUpForm from '@sections/SignUpForm';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Features />
    <Protocols />
    <Team />
    <Faq />
    {/* <SignUpForm /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
