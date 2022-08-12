import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Router } from 'react-router-dom'
import Head from './Head';
/* Agregar animacion onscroll para el navbar*/
function NavbarHome() {
  return (
    <>
      <Head />
      <Navbar className='orange-bg h-16' sticky="top" collapseOnSelect expand="lg">
        <Container>
          <div className='max-w-xs'>
            <Link to="/">
              <img
                className='logo-navbar'
                src="/assets/logo.png"
              />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className='navbar-links'>
            <Nav>
              <NavDropdown title="Redes" className='font-semibold navbar-links text-end px-3'>
                <NavDropdown.Item><a href="https://youtube.com/c/CriptoNorber">Youtube</a></NavDropdown.Item>
                <NavDropdown.Item><a href="https://www.instagram.com/criptonorber/">Instagram</a></NavDropdown.Item>
                <NavDropdown.Item><a href="https://t.me/criptonorberok">Telegram</a></NavDropdown.Item>
                <NavDropdown.Item><a href="https://www.linkedin.com/in/npgiudice/">LinkedIn</a></NavDropdown.Item>
                <NavDropdown.Item><a href="https://www.twitch.tv/criptonorber">Twitch</a></NavDropdown.Item>
                <NavDropdown.Item><a href="https://twitter.com/npgiudice">Twitter</a></NavDropdown.Item>
              </NavDropdown>
              <Link className='font-semibold navbar-links text-end px-3' to='#about'>Quién soy</Link>
              <Link className='font-semibold navbar-links text-end px-3' to="/notas">Notas</Link>
              <Link className='font-semibold navbar-links text-end px-3' to="/material">Material</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarHome