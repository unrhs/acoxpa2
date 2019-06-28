import React from "react";
import styled from "styled-components";

import palette from "../../../Pallete";
const Navbar3 = styled.nav`
  width: 100%;
  height: 25px;
  background-color: ${palette.color.black.main};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 3em;

  width: 100%;
  z-index: 99;
`;

const List = styled.li`
  text-decoration: none;
  list-style: none;
  margin-left: 20px;
  padding: 10px;
  color: ${palette.color.grey};
  :hover {
    text-decoration: none;
    color: ${palette.color.primary.main};
    cursor: pointer;
    -webkit-transition: bottom 0.1s ease-in-out;
    -moz-transition: bottom 0.1s ease-in-out;
    -o-transition: bottom 0.1s ease-in-out;
    transition: bottom 0.3s ease-in-out;
  }
`;
const Anchor = styled.a`
  color: ${palette.color.grey[700]};
  :hover {
    text-decoration: none;
    color: ${palette.color.primary.main};
    cursor: pointer;
    -webkit-transition: bottom 0.1s ease-in-out;
    -moz-transition: bottom 0.1s ease-in-out;
    -o-transition: bottom 0.1s ease-in-out;
    transition: bottom 0.3s ease-in-out;
  }
`;

const NavBar3 = () => {
  return (
    <Navbar3>
      {" "}
      <List>
        <Anchor href="/fashion">MODA</Anchor>
      </List>
      <List>
        <Anchor href="/">OFERTAS</Anchor>
      </List>
      <List>
        <Anchor href="/login">LOGIN</Anchor>
      </List>
      <List>
        <Anchor href="/register">REGISTRO</Anchor>
      </List>
    </Navbar3>
  );
};

export default NavBar3;
