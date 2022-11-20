import { findByText, render, screen, fireEvent, findByRole } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom'
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from '../NavBar'

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // To have a look at the rendered html in the console
  // screen.debug();

  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});


test("renders link to user profile that is logged in", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText("Profile")
  expect(profileAvatar).toBeInTheDocument();

  // screen.debug();
});

test("renders sign in and out buttons again when users log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const signOutLink = await screen.findByRole("link", { name: "Sign out" });
  fireEvent.click(signOutLink);

  const signInLink = await screen.findByRole("link", { name: "Sign in" });
  const signUpLink = await screen.findByRole("link", { name: "Sign up" });

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
})