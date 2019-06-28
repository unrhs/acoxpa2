import styled from "styled-components";
import palette from "../../Pallete";

let mainColor = palette.color.primary.main;
let mainWhite = palette.color.primary.white;
let lightGreen = palette.color.primary[900];
export default styled.button`
  margin: 20px;
  /* width: 200px;
  height: 50px; */
  font-family: ${props => (props.secondary ? "Droid Sans" : "Ubuntu")};
  font-size: 14px;
  background: ${props => (props.secondary ? mainColor : 0.0)};
  border: 2px solid ${mainColor};
  box-shadow: none;
  color: ${props => (props.secondary ? mainWhite : mainColor)};
  text-decoration: none;
  transition: all 0.3s ease-out;
  cursor: pointer;
  padding: 12px 23px;
  display: inline-block;
  margin: 0 10px 10px 0;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 600;
  border-radius: ${props => (props.rounded ? "30px" : null)};
  :hover {
    background: ${props => (props.secondary ? lightGreen : mainColor)};
    border-radius: ${props => (props.rounded ? "30px" : null)};
    color: ${mainWhite};

    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
`;
