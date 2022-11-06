import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.jpg'
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
        <NavLink to="/">
          <Navbar.Brand className="col-2"><img src={logo} alt='website logo' height="75" /></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="white" id="basic-navbar-nav">
            <NavLink to="/" className={styles.NavBarTitle} ><h1>FitnessBlogz </h1></NavLink>
            <Nav className="ms-auto text-center">
                <NavLink exact to="/" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-home"></i> Home</NavLink>
                <NavLink to="/signin" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-sign-in-alt"></i> Sign in</NavLink>
                <NavLink to="/signup" className={styles.NavBarContent} activeClassName={styles.Active}><i className="fas fa-user-plus"></i> Sign up</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBar