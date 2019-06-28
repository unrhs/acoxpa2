import styled from "styled-components";
import palette from "../../Pallete";

export default styled.div`
  border-radius: 5px;
  border: ${props =>
    props.lined ? `2px solid ${palette.color.primary.main}` : null};
  margin: 20px 20px;
`;
