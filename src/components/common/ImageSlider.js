import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #4169e1;
  display: flex;
  position: relative;
`;


const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" ? "10px" : "auto"};
  right: ${props => props.direction === "right" ? "10px" : "auto"};
  cursor: pointer;
  opacity: 0.5;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Adjust as needed for image sizing */
`;


const ImageSlider = () => {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1697179426897-75090343fe83?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
" alt="Your Image" />
      <Arrow direction ="left" >
        <ArrowLeft  />
      </Arrow>
      <Arrow direction ="right">
        <ArrowRight />
      </Arrow>

    </Container>
  )
}

export default ImageSlider