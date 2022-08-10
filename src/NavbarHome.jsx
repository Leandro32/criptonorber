import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Nav } from 'react-bootstrap';
/* Agregar animacion onscroll para el navbar*/ 
function NavbarHome() {
  return (
    <>
    <Navbar className='orange-bg' sticky="top" collapseOnSelect expand="lg">
      <Container>
        <div className='max-w-xs'>
          <img
            className='logo-navbar'
            src="/assets/logo.png"
          />
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='navbar-links'>
          <Nav>
            {/*
            <Link className='' href={}>
              <NavLink className='font-semibold navbar-links text-end'>Redes</NavLink>
            </Link>
              <Link className='font-semibold navbar-links text-end' href='/'>Quién soy</Link>
              <Link className='font-semibold navbar-links text-end' href="/portalnoticias">Notas</Link>
              <Link className='font-semibold navbar-links text-end' href="/">Material</Link>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarHome