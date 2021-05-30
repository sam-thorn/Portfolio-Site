import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
// import Home from './Home'

function App () {
  return (
    <>
      <div>
        <Nav />
        <h1>Hello Y'all</h1>
        <Footer />
      </div>
    </>
  )
}

export default App