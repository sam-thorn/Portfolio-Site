import React from 'react'
import { Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)

import Nav from './Nav'
import Footer from './Footer'
import MainIntro from './MainIntro'

function App () {
  return (
    <>
      <div className='app-container'>
        <Nav />      
        <MainIntro />
        <Footer />     
      </div> 
    </>
  )
}

export default App