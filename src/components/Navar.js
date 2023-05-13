import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navarconteiner = styled.div`
  background: #202020;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100px;

  `;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ffcb77;
  font-size: 20px;
  transition: 300ms;

  &:hover {
    color: #17c3b2;
  }
`;


function Navar({}) {

  return (
    <Navarconteiner>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/crear-estudiante">Regitrarse</StyledLink>
      <StyledLink to="/estudiantes">Estudiantes</StyledLink>
    </Navarconteiner>
  );
}

export default Navar;
