import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Chairs from '../components/Chairs'
import Latest from '../components/Latest'

function Home() {
  return (
    <div>
        <Hero />
        <Chairs />
        <Latest />
    </div>
  )
}

export default Home