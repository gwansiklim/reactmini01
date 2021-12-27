import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Dictionary from './Dictionary';
import Post from './Post';
import Detail from './Detail';

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Container>
        <Title>나만의 단어 사전</Title>
        <Line />
        <Switch>
          <Route path="/" exact>
            <Dictionary />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/detail"></Route>
          <Detail />
        </Switch>
      </Container>

    </div >
  );
}

const Container = styled.div`
max-width: 500px;
min-heigth: 200vh;
background: slateblue;
padding: 20px;
border: 1px solid #ddd;
border-radius: 20px;
margin: 20px auto;
`

const Title = styled.h1`
color: white;
text-align: center;
`

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;
