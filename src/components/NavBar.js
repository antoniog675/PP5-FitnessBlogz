import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.jpg'
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';

// Here we are going to create the log and JSX for the navbar

const NavBar = () => {

  // Here we are going to retrieve the current user data from the CurrentUserContext.js and set it as currentUser

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    // In this function users will be signed out
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null)
      removeTokenTimestamp();
    } catch (err) {
      console.log(err)
    }
  }

  // JSX for icons on nav bar, depending on user status it will show different icons

  const loggedInIcons = <>
    <NavLink to="/liked" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-heart"></i>Liked</NavLink>
    <NavLink to="/" className={styles.NavBarContent} onClick={handleSignOut}> <i className="fas fa-sign-out-alt"></i>Sign out</NavLink>
    <NavLink to={`/profiles/${currentUser?.profile_id}`} className={styles.NavBarContent} onClick={() => { }}> <Avatar src={currentUser?.profile_image} text="Profile" height={40} /></NavLink>
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
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand className="col-2"><img src={logo} alt='website logo' height="75" /></Navbar.Brand>
        </NavLink>
        <NavLink to="/" className={`${styles.NavBarTitle} d-none d-sm-block`}  ><h1>FitnessBlogz </h1></NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} className="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="white" id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink exact to="/" className={styles.NavBarContent} activeClassName={styles.Active}> <i className="fas fa-stream"></i> Feed</NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar