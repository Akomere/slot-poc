import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { connect } from "react-redux";
import { setSelectedService } from '../../redux/actions/bookingAction'
import { useHistory  } from 'react-router-dom';

function ServicesList({_setSelectedService}) {
  //will need to get this from the backend using redux thunk
  const services = [
    { name: 'Service 1', price: '$100', description: "Content for service 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Ut tortor pretium viverra suspendisse potenti." },
    { name: 'Service 2', price: '$150', description: "Content for service 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Ut tortor pretium viverra suspendisse potenti." },
    { name: 'Service 3', price: '$200', description: "Content for service 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Ut tortor pretium viverra suspendisse potenti." },
  ];
  let history = useHistory();
  const handleBook = (value) => {
    console.log(value);//get the selected service name
    //use it to filter out of the list of services we have
    _setSelectedService(value)
    history.push("/appointments");
  }
  return (
    <List>
      {services.map((service, index) => (
        <ListItem key={index} divider={index !== services.length - 1} style={{ width: '100%' }}>
          <ListItemText primary={service.name} secondary={`Price: ${service.price}`} />
          <Button variant="contained" color="primary" onClick={() => handleBook(service.name)}>
            Book
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

const mapDispatchToProps = dispatch => ({
  _setSelectedService: (serviceItem) => dispatch(setSelectedService(serviceItem))
});

export default connect(null, mapDispatchToProps)(ServicesList);//connect decorated the component with these functions, passing in the returned function: fireSetSelectedService as prop into the component 
