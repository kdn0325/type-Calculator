import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import styled from 'styled-components'

const Container = styled.div `
    display:flex;
    min-height:100vh;
    background:#323232;
    /* width:100vh; */
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
function App() {
  return (
      <Container>
        <Calculator/>
      </Container>
  );
}

export default App;
