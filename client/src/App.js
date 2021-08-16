import React from 'react';

import Head from './components/Head/Head';
import Footer from './components/Footer/Footer';
import LeftBlock from './components/LeftBlock/LeftBlock';
import MainBlock from './components/MainBlock/MainBlock';
import AuthModalContainer from './components/AuthModal/AuthModal';
import AlertModalContainer from './components/AlertModal/AlertModal';

import './styles/main.scss'

export default function App() {
  return (
    <>
      <Head />
      <LeftBlock />
      <MainBlock />
      <Footer />
      <AuthModalContainer />
      <AlertModalContainer />
    </>
  );
};
