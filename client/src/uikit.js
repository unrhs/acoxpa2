import React from "react";
import Box from "./Components/Elements/Box";
import Header from "./Components/Elements/Header";
import Button from "./Components/Elements/Button";
import Input from "./Components/Elements/Input";
import Plaintext from "./Components/Elements/PlainText";
import Section from "./Components/Elements/Section";
import TextArea from "./Components/Elements/TextArea";
import Wrapper from "./Components/Elements/Wrapper";
import PlainText from "./Components/Elements/PlainText";
import Slider from "./Components/Slider";
import Card from "./Components/Cards";
import Discounts from "./Components/Discounts";
import Carousel from "./Components/Carousel";
// import Slider from "../../../Acoxpa/axcopa-front/src/components/landing/Slider";

const Uikit = ({ ads }) => (
  <div>
    <h1>Este es el uikit</h1>
    <div style={{ marginBottom: 90 }} />
    <Header>Hola</Header>
    <Box lined>esta es una box</Box>
    <Box>esta no tiene linea</Box>
    <Plaintext>Hola soy un texto plano</Plaintext>

    <Section>
      <Header>Estoy en el section que no tiene props</Header>
    </Section>
    <Section allWidth>
      <Plaintext>Este section tiene todo el width 100</Plaintext>
    </Section>
    <Section allWidth colorback>
      <PlainText>Este es un formulario </PlainText>
      <Wrapper colorback>
        <Input type="text" name="alguien" />
      </Wrapper>

      <Wrapper line>
        <Input type="text" name="alguien" />
        <TextArea />

        <Button>hola soy un boton</Button>
        <Button secondary>Soy un secundario</Button>
        <Button rounded>Soy un boton mejor</Button>
      </Wrapper>
    </Section>
    <Slider />
    <Card />
    <Discounts />
    {/* <Carousel /> */}
  </div>
);

export default Uikit;
