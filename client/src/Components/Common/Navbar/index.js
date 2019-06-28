import React from "react";
import styled from "styled-components";

import palette from "../../../Pallete";
const Navbar = styled.nav`
  width: 100%;
  height: 25px;
  background-color: ${palette.color.primary.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 1.6em;

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

const NavBar = () => {
  return (
    <Navbar>
      {" "}
      <List>
        <Anchor href="/">INICIO</Anchor>
      </List>
      <List>
        <Anchor href="/business">COMPRA</Anchor>
      </List>
      <List>
        <Anchor href="/restaurants">COME</Anchor>
      </List>
      <List>
        <Anchor href="/fun">DIVIÉRTETE</Anchor>
      </List>
      <List>
        <Anchor href="/realstate">BIENES RAICES</Anchor>
      </List>
    </Navbar>
  );
};

export default NavBar;
