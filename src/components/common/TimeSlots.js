import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import generateRandomTimeSlots from '../../utils/availableSlotsData';
import { useSelector } from 'react-redux';

const bookedTime = state => state

export default function TimeSlots() {
        const [checked, setChecked] = React.useState([0]);
        const [bookedSlot, setBookedSlot] = React.useState("");
        const [availableSlots, setAvailableSlots] = useState([])

        const booking = useSelector(bookedTime);

        console.log(booking);

        useEffect(() => {
          const slots = generateRandomTimeSlots();
          setAvailableSlots(slots);
        }, [])
        //need to get the new selected date from the store

        //filter through all the available slots by day
        //list all the available slots for that day
        const mockAppointments = [
            {
              _id: "1",
              time: "2023-09-20T14:00:00Z",
              user: "John Doe",
              email: "john.doe@example.com"
            },
            {
              _id: "2",
              time: "2023-09-20T14:30:00Z",
              user: "Jane Smith",
              email: "jane.smith@example.com"
            },
            {
              _id: "3",
              time: "2023-09-21T10:00:00Z",
              user: "Alice",
              email: "alice@example.com"
            },
            {
              _id: "4",
              time: "2023-09-21T10:30:00Z",
              user: "Bob",
              email: "bob@example.com"
            }
          ];

        const handleToggle = (value ) => () => {
          const currentIndex = checked.indexOf(value);
          const newChecked = [...checked];

          if (currentIndex === -1) {
            newChecked.push(value);
          } else {
            newChecked.splice(currentIndex, 1);
          }

          setChecked(newChecked);
        };
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '1px solid gray', boxShadow: 2, maxHeight:'400px', overflowY: 'auto' }}>
        {availableSlots.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
                return (
                <ListItem
                    key={value}
                    secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                        <CommentIcon />
                    </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    </ListItemButton>
                </ListItem>
                );
            })}
        </List>
    );
}
