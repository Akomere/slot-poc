import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

function ServicesList({ services, onBook }) {
  return (
    <List>
      {services.map((service, index) => (
        <ListItem key={index} divider={index !== services.length - 1} style={{ width: '100%' }}>
          <ListItemText primary={service.name} secondary={`Price: ${service.price}`} />
          <Button variant="contained" color="primary" onClick={() => onBook(service)}>
            Book
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default ServicesList;
