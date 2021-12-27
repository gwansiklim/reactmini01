import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const Dictionary = (props) => {
  const history = useHistory();

  return (
    <div>
      <Box>
        <Font>단어</Font>
        <Span>단어</Span>
        <Font>설명</Font>
        <Span>이곳은 단어에 대한 설명하는 곳입니다.</Span>
        <Font>예시</Font>
        <Example>이곳은 단어에 대한 설명하는 곳입니다.</Example>
      </Box>
      <Box>
        <Font>단어</Font>
        <Span>단어</Span>
        <Font>설명</Font>
        <Span>이곳은 단어에 대한 설명하는 곳입니다.</Span>
        <Font>예시</Font>
        <Example>이곳은 단어에 대한 설명하는 곳입니다.</Example>
      </Box>
      <Box>
        <Font>단어</Font>
        <Span>단어</Span>
        <Font>설명</Font>
        <Span>이곳은 단어에 대한 설명하는 곳입니다.</Span>
        <Font>예시</Font>
        <Example>이곳은 단어에 대한 설명하는 곳입니다.</Example>
      </Box>
      <Fab color="secondary" aria-label="edit" style={{ float: "right", marginTop: "-70px" }} onClick={() => {
        history.push("/post");
      }}>
          <EditIcon />
      </Fab>
    </div>

  )
}

const Box = styled.div`
width: 350px;
height: 200px;
border: 1px solid #ddd;
border-radius: 20px;
margin: 12px auto;
`
const Font = styled.p`
font-size: 10px;
color: white;
border-bottom: 1px solid #ddd;
width: 20px;
margin: 12px 15px;
`
const Span = styled.p`
font-size: 15px;
color: white;
margin: 5px 15px
`

const Example = styled.p`
font-size: 15px;
color: blue;
margin: 5px 15px
`

export default Dictionary;