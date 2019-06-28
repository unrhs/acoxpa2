import styled from "styled-components";
import palette from "../../Pallete";
export default styled.section`
  /* width: ${props => (props.allWidth ? "93%" : "93%")}; */
  margin: ${props => (props.allWidth ? "0" : "20px 40px 40px 40px")};
  background:${props => (props.colorback ? `${palette.color.grey[800]}` : 0.0)};
  display: flex;
  flex-direction: row;
  flex-grow: inherit;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 60px;
  align-items: center;
`;
