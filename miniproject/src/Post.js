import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Post = (props) => {
  const history = useHistory();

  return (
    <div>
      <Back onClick={() => {
        history.push('/');
      }}>돌아가기</Back>
      <Box>
        <Title>단어</Title>
        <Text></Text>
        <Title>설명</Title>
        <Text></Text>
        <Title>예시</Title>
        <Text></Text>
      </Box>
      <Box style={{marginTop: "30px"}}>
      <Posting>작성하기</Posting>
      </Box>
      
      
    </div>
    
  )
}

const Back = styled.button`
font-size: 15px;
font-weight: bold;
border: none;
outline: none;
background: slateblue;
cursor: pointer;
transition: 0.5s ease-in-out;
&:hover {
  color: white;
}
`
const Box = styled.div`
display: flex; 
flex-direction: column;
justify-content:center;
align-items: center;
`

const Title = styled.h6`
color: white;
`
const Text = styled.input`
margin-top: -10px;
width: 200px;
height: 20px;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid white;
text-align: center;
font-size: 15px;
background-color: transparent;
color: white;
outline: none;
`

const Posting = styled.button`
border: none;
background-color: transparent;
outline: none;
cursor: pointer;
font-weight: bold;
transition: 0.6s ease-in-out;
&:hover {
  color: white;
}
`

export default Post;