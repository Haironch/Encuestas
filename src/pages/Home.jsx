import React from "react";
import styled from "styled-components";
import { Conteiner } from "../styles";

const Conteinerhome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;

  h3 {
    margin: 0;
    font-size: 48px;
  }
  p { 
    font-size: 20px;
  }
`;

function Home() {
  return (
    <Conteiner>
      <Conteinerhome>
        <h3>HAIRON AURELIO YAC CHAVEZ</h3>
        <p>INGENIERIA DE SOFTWARE</p>
      </Conteinerhome>
    </Conteiner>
  );
}

export default Home;
