
import Header from './Component/Header/Header'

import Main from './Component/Main/Main'

import './styles/global.scss'

import React from "react";

function App() {

  return (
    <>
      <nav className='scroll'>
        <Header />
        <Main />
      </nav>
    </>
  )
}

export default App;
