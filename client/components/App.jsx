import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
import MainIntro from './MainIntro'
// import Home from './Home'

function App () {
  return (
    <>
        <Nav />      
        <MainIntro />
        <Footer />      
    </>
  )
}

export default App