import styled from "styled-components";
import palette from "../../Pallete";
export default styled.div`
  border: ${props =>
    props.line ? `2px solid ${palette.color.primary.main}` : null};
  padding: 10px;
  width: ${props => (props.allWidth ? "97.5%" : "93%")};
  margin: ${props => (props.allWidth ? "0px" : "20px 40px 40px 40px")};
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.toRow ? "row" : "column")};
  justify-content: center;
  /* align-content:center; */
  /* justify-items:center; */
  /* align-items:center; */
  background: ${props =>
    props.colorback ? `${palette.color.grey[800]}` : 0.0};
  box-shadow: none;
  text-decoration: none;
  font-weight: 600;
`;
