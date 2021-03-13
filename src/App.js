import styled from 'styled-components'


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-weight:100;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


function App() {
  return (
   <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
  );
}

export default App;
