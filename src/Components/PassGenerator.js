import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Form, FormGroup, Row, Button } from "react-bootstrap";
import { Numbers, Capital, Lowercase, Symbols } from "./PasswordCharacters";

function PassGenerator() {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(10);
  const [capital, setCapital] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLength = (e) => {
    setPassLength(e.target.value);
  };
  const handleCapital = (e) => {
    setCapital(e.target.checked);
  };
  const handleLowercase = (e) => {
    setLowercase(e.target.checked);
  };
  const handleNumbers = (e) => {
    setNumbers(e.target.checked);
  };
  const handleSymbols = (e) => {
    setSymbols(e.target.checked);
  };

  const RandomPassGenerator = (e) => {
    e.preventDefault();
    let characterList = "";

    if (numbers) {
      characterList = characterList + Numbers;
    }
    if (capital) {
      characterList = characterList + Capital;
    }
    if (lowercase) {
      characterList = characterList + Lowercase;
    }
    if (symbols) {
      characterList = characterList + Symbols;
    }

    setPassword(createPass(characterList));

    
  };
  const createPass = (characterList) => {
    let password = "";

    for (let i = 0; i < passLength; i++) {
      let characterİndex = Math.floor(Math.random() * characterList.length);
      password = password + characterList.charAt(characterİndex);
    }

    return password;
  };

  return (
    <div>
      <Container className="d-flex flex-column w-50">
        <Form>
          <FormGroup as={Row}>
            <Form.Control
              className="mb-3"
              value={password}
              onChange={handleChange}
              type="text"
            />
            <Form.Label column="3">Password length</Form.Label>
            <Form.Control
              className="w-25 ml-auto"
              value={passLength}
              onChange={handleLength}
              type="number"
            />
          </FormGroup>
          <FormGroup as={Row}>
            <Form.Label column="3">Capital letters</Form.Label>
            <Form.Check
              checked={capital}
              onChange={handleCapital}
              type="checkbox"
            />
          </FormGroup>
          <FormGroup as={Row}>
            <Form.Label column="3">Lowercase letters</Form.Label>
            <Form.Check
              checked={lowercase}
              onChange={handleLowercase}
              type="checkbox"
            />
          </FormGroup>
          <FormGroup as={Row}>
            <Form.Label column="3">Numbers</Form.Label>
            <Form.Check
              checked={numbers}
              onChange={handleNumbers}
              type="checkbox"
            />
          </FormGroup>
          <FormGroup as={Row}>
            <Form.Label column="3">Symbols</Form.Label>
            <Form.Check
              checked={symbols}
              type="checkbox"
              onChange={handleSymbols}
            />
          </FormGroup>
          <Button
            onClick={RandomPassGenerator}
            className="d-block mx-auto"
            variant="primary"
            type="submit"
          >
            Generate Password
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default PassGenerator;
