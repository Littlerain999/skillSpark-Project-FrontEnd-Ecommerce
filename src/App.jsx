import React from 'react'
import Home from './pages/Home'
import Layout from './pages/Layout'
import { Route, Routes } from 'react-router'
import Abouts from './pages/Abouts'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Abouts />} />
          <Route path="blog" element={<Abouts />} />
          <Route path="shop" element={<Abouts />} />
          <Route path="contact" element={<Abouts />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App