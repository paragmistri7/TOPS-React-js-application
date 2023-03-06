import { Component } from "react";
import styled from "styled-components";
import StyledComponent from "styled-components";
import "./15 custom15.css";

class Csscompo extends Component {
  render() {
    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;
    
    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    let a = {
      backgroundColor: "green",
      color: "black",
    };

    let b = {
      backgroundColor: "pink",
      color: "red",
    };

    const Butt = styled.button`
      backgroundColor: "yellow",
      color: "orange",
      `;
    return (
      <>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>

        <h3 style={a}> PARAG GOHIL</h3>
        <h3 style={{ ...b }}> PARAG GOHIL</h3>
        <h3 style={{ color: "blue", backgroundColor: "orange" }}>
          {" "}
          PARAG GOHIL
        </h3>
        <Butt>click me</Butt>
        <h3>PARAG MISTRY</h3>
      </>
    );
  }
}
export default Csscompo;
