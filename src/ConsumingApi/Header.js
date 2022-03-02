import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { app } from "../base";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { current } = useContext(AuthContext);
  return (
    <Container>
      <Wrapper>
        <Logo> Use Query</Logo>
        <Navigation>
          <Home to="/">Homepage</Home>
          <Create to="/create">Create</Create>
        </Navigation>

        {current ? (
          <Nav
            onClick={() => {
              app.auth().signOut();
            }}
          >
            Sign Out
          </Nav>
        ) : (
          <Register to="/register">Create an Account</Register>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #004080;
  color: white;
  position: fixed;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin: 0 20px;
  align-items: center;
`;
const Navigation = styled.div`
  display: flex;
  flex: 1;
`;

const Home = styled(NavLink)`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Register = styled(NavLink)`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Create = styled(NavLink)`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Logo = styled.div`
  color: white;
  margin: 0 20px;
  font-size: 30px;
  font-weight: bold;
`;

const Nav = styled.div`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
