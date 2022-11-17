import React, { useState } from "react";

import { Form, Alert, Button, Col, Row, Image, Container } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

// Renders user sign in form and handles sign in

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect('loggedIn')

    const [ signInData, setSignInData ] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const { username, password } = signInData;
    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post('/dj-rest-auth/login/', signInData)
            setCurrentUser(data.user);
            setTokenTimestamp(data);
            history.goBack();
        } catch (err) {
            setErrors(err.response?.data)
        }
    }

  return (
      <Row className={styles.Row}>
          <Col className="my-auto p-0 p-md-2" md={6}>
              <Container className={`${appStyles.Content} p-4 `}>
                  <h1 className={styles.Header}>sign in</h1>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="username">
                          <Form.Label className="d-none">Username</Form.Label>
                          <Form.Control
                          type="text" 
                          placeholder="Username"
                          name="username" 
                          className={styles.Input}
                          value={username}
                          onChange={handleChange}
                          />
                      </Form.Group>
                      {errors.username?.map((message, idx) => (
                      <Alert key={idx} variant="warning">
                      {message}
                      </Alert>
                      ))}

                      <Form.Group className="mb-3" controlId="password">
                          <Form.Label className="d-none">Password</Form.Label>
                          <Form.Control 
                          type="password" 
                          placeholder="Password" 
                          name="password"
                          className={styles.Input}
                          value={password}
                          onChange={handleChange}
                          />
                      </Form.Group>
                      {errors.password?.map((message, idx) => (
                      <Alert key={idx} variant="warning">
                      {message}
                      </Alert>
                      ))}

                      <Button 
                      className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                      type="submit"
                      >
                      Sign In
                      </Button>
                      {errors.non_field_errors?.map((message, idx) => (
                      <Alert key={idx} variant="warning" className="mt-3">
                      {message}
                      </Alert>
                      ))}
                  </Form>
              </Container>

              <Container className={`mt-3 ${appStyles.Content}`}>
                  <Link className={styles.Link} to="/signup">
                      Don't have an account? <span>Sign up now!</span>
                  </Link>
              </Container>
          </Col>

          <Col
          md={6}
          className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
          >
          <Image
          className={`${appStyles.FillerImage}`}
          src={"https://res.cloudinary.com/dvzlcfpp8/image/upload/v1667855122/signin_image_pujvuf.jpg"}
          />
          </Col>
      </Row>
  );
}

export default SignInForm;