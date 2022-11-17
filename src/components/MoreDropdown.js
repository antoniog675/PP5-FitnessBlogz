import styles from "../styles/MoreDropdown.module.css"
import React from "react";
import Dropdown from "react-bootstrap/Dropdown"
import { useHistory } from "react-router-dom";

// Three dot dropdown that will handle the profile edit details, and post delete and edit post

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
        e.preventDefault();
        onClick(e);
        }
    }
    />
  ));

  // Dropdown to allow user to edit their profile details such as image, bio, username, password

  export function ProfileEditDropdown({ id }) {
      const history = useHistory();
      return (
          <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
              <Dropdown.Toggle as={ThreeDots} />
              <Dropdown.Menu>
                  <Dropdown.Item
                  onClick={() => history.push(`/profiles/${id}/edit`)}
                  aria-label="edit-profile"
                  >
                      <i className="fas fa-edit" /> edit profile
                  </Dropdown.Item>
                  <Dropdown.Item
                  onClick={() => history.push(`/profiles/${id}/edit/username`)}
                  aria-label="edit-username"
                  >
                      <i className="far fa-id-card" />
                      change username
                  </Dropdown.Item>
                  <Dropdown.Item
                  onClick={() => history.push(`/profiles/${id}/edit/password`)}
                  aria-label="edit-password"
                  >
                      <i className="fas fa-key" />
                      change password
                  </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
      );
    }
  

  // Handles the edit and delete dropdown for the post dropdown

  export const MoreDropdown = ({handleEdit, handleDelete}) => {
      return (
          <Dropdown className="ml-auto" drop="left">
              <Dropdown.Toggle as={ThreeDots} />
              <Dropdown.Menu className="text-center" popperConfig={{ strategy: "fixed" }}>
                  <Dropdown.Item className={styles.DropdownItem} onClick={handleEdit} arial-label="edit"><i className="fas fa-edit"/></Dropdown.Item>
                  <Dropdown.Item className={styles.DropdownItem} onClick={handleDelete} arial-label="delete"><i className="fas fa-trash-alt"/></Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
      );

  }