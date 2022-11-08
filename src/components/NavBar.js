import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.jpg'
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null)
    } catch (err) {
      console.log(err)
    }
  }

  const loggedInIcons = <>
    <NavLink to="/feed" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-stream"></i>Feed</NavLink>
    <NavLink to="/liked" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-heart"></i>Liked</NavLink>
    <NavLink to="/" className={styles.NavBarContent} onClick={handleSignOut}> <i className="fas fa-sign-out-alt"></i>Sign out</NavLink>
    <NavLink to={`/profiles/${currentUser?.profile_id}`} className={styles.NavBarContent} onClick={() => {}}> <Avatar src={currentUser?.profile_image} text="Profile" height={40} />Sign out</NavLink>
    </>

  const addPostIcon = (
    <NavLink to="/posts/create" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-plus-square"></i>Add post</NavLink>      
  )

  const loggedOutIcons = (
    <>
      <NavLink to="/signin" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-sign-in-alt"></i> Sign in</NavLink>
      <NavLink to="/signup" className={styles.NavBarContent} activeClassName={styles.Active}><i className="fas fa-user-plus"></i> Sign up</NavLink>
    </>
  )
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
        <NavLink to="/">
          <Navbar.Brand className="col-2"><img src={logo} alt='website logo' height="75" /></Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="white" id="basic-navbar-nav">
            <NavLink to="/" className={styles.NavBarTitle} ><h1>FitnessBlogz </h1></NavLink>
            <Nav className="ms-auto text-center">
                <NavLink exact to="/" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-home"></i> Home</NavLink>
                {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBar