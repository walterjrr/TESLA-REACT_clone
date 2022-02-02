import './App.css';
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Main from './Component/Main/Main'

import React from "react";

function App() {

  return (
    <>
      <nav className='scroll'>
        <Header />
        <Main />
      </nav>
      <Footer />
    </>
  )
}

export default App;
