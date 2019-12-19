import React from 'react';
import {Container, Box, Box1, Box2, Box3, Box4, Border} from './styles'
import {DiLinux} from 'react-icons/di'

function App() {
  return (
    <Container>
      <Border>
        <Box />
        <Box1 style={{marginTop:18}}/>
        <Box2 style={{marginTop:16}}/>
        <Box3 style={{marginTop:18}}/>
        <Box4 />
      </Border>
      <button style={{marginRight: 500, width: 80, background: 'none', border: 'none', display:'flex', flexDirection:'column'}}>
        <DiLinux style={{paddingLeft: 25}}/>
        <text style={{fontSize:10, marginTop: 5}}>Voce esta aqui</text>
      </button>
      <Border>
        <Box1 style={{marginTop:6, background:'red'}}/>
        <Box style={{background:'palevioletred'}}/>
        <Box3 style={{marginTop:6, background:'#6df6'}}/>
        <Box4 style={{background:'#66cc'}}/>
        <Box2 style={{marginTop:4, background:'#581'}}/>
      </Border>
    </Container>
  );
}



export default App;

