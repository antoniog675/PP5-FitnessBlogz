import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.jpg'
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
        <Navbar.Brand className="col-2"><img src={logo} alt='website logo' height="75" /></Navbar.Brand>
        <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="white" id="basic-navbar-nav">
            <Nav.Link className="text-center" ><h1>FitnessBlogz </h1></Nav.Link>
            <Nav className="ms-auto text-center">
                <Nav.Link className={styles.NavBarContent}> <i className="fas fa-home"></i> Home</Nav.Link>
                <Nav.Link className={styles.NavBarContent}> <i className="fas fa-sign-in-alt"></i> Sign in</Nav.Link>
                <Nav.Link className={styles.NavBarContent}><i className="fas fa-user-plus"></i> Sign up</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBar