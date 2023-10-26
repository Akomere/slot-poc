import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import styled from 'styled-components';
import { connect } from "react-redux";

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

function Service({_selectedService}) {
  const [service, setService] = useState({})

  const services = [
    { name: 'Service 1', price: '$100', description: "Content for service 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Ut tortor pretium viverra suspendisse potenti." },
    { name: 'Service 2', price: '$150', description: "Content for service 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Ut tortor pretium viverra suspendisse potenti." },
    { name: 'Service 3', price: '$200', description: "Content for service 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Ut tortor pretium viverra suspendisse potenti." },
    // ... add more services
    ];

    useEffect(() => {//this is we want to fetch data from the API
      console.log(_selectedService);
      //make API call to get all the services
      const foundService = services.find(service => service.name === _selectedService);
      setService(foundService);
    },[])

    return(
        <Container>
              <Description>
                <Typography variant="h6" gutterBottom> Braids </Typography>
                <Typography variant="body1" gutterBottom>
                  {service?.description || "nada"}
                </Typography>
              </Description>
              <Value>
                  <Typography>£89.00</Typography>
                  <Typography>50min</Typography>
              </Value>
        </Container>
    );
}

const mapStateToProps = state => ({
  _selectedService: state.timeSlots.bookedService
});

export default connect(mapStateToProps)(Service);


