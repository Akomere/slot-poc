import * as React from 'react';
import { Typography } from "@mui/material";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 10px;
  max-width: 700px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
` 
const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

export default function Service() {

    return(
        <Container>
              <Description>
                <Typography variant="h6" gutterBottom> Braids </Typography>
                <Typography variant="body1" gutterBottom>
                  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                  quasi quidem quibusdam. quam beatae rerum inventore consectetur,
                  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                  quasi quidem quibusdam.
                </Typography>
              </Description>
              <Value>
                  <Typography>£89.00</Typography>
                  <Typography>50min</Typography>
              </Value>
        </Container>
    );
}


