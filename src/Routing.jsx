import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import PortalNoticias from './PortalNoticias'
import Material from './Material'
import Footer from './Footer'
import NavbarHome from './NavbarHome'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <NavbarHome />
          <App />
          <Footer />
        </>
        } />
      <Route path="/portalnoticias" element={
        <>
          <NavbarHome />
          <PortalNoticias />
          <Footer />
        </>} />
      <Route path="/material" element={
        <>
          <NavbarHome />
          <Material />
          <Footer />
        </>} />
    </Routes>
  )
}
