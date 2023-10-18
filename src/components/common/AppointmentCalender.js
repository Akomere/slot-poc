import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { DateCalendar, StaticDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Box, Card, CardActions, CardContent, CardMedia, Container, Stack, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Radio } from '@mui/material';
import Button from '@mui/material/Button';
import TimeSlots from './TimeSlots';
import Service from './Service';
import ContactCard from './ContactCard';
import { setSelectedBooking } from '../../redux/actions/bookingAction';
import { connect } from "react-redux";

class AppointmentCalender extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  handleTimeSelected = (date) => {
    //const date = event.target.value;
    console.log(date);
    console.log(this.state);
    this.setState({ date });
    console.log(this.state);

    this.props.dispatch(setSelectedBooking(date));
  }
  render() {
    return (
      <Box>
        <Box height="100%" justifyContent="center">
          <Stack direction="row" width="75vw" justifyContent="center" paddingX={5} paddingY={2} m="auto" flex={1} spacing={4} sx={{ border: '1px solid gray', boxShadow: 2 }}>
            <Stack direction="column" alignItems="center" flex={3} spacing={3}>
              <Typography variant="h5">SELECTED SERVICES</Typography>
              <Service />
              <Stack direction="row" sx={{ width: 800, height: "80vh" }} spacing={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    sx={{ border: '1px solid gray', boxShadow: 2 }}
                    onChange={this.handleTimeSelected}
                  />
                </LocalizationProvider>
                <Box flex={1}>
                  <TimeSlots />
                </Box>
              </Stack>
            </Stack>

            <Stack direction="row" flex={1} justifyContent="flex-end">
              <ContactCard />
            </Stack>

          </Stack>
        </Box>
      </Box>
    );
  }
}

// function AppointmentCalendar() {
//   const [events, setEvents] = useState([]);
//   const [currentDate, setCurrentDate] = useState(new Date());

//   //need to dispatch the new selected date to the store

//   const handleTimeSlotSelected = () => {

//   }
//   useEffect(() => {
//     async function fetchAppointments() {
//       // const response = await axios.get('http://localhost:5000/api/appointments');
//       // const appointments = response.data;

//       const appointments = mockAppointments;

//       const calendarEvents = appointments.map(appointment => ({
//         start: new Date(appointment.time),
//         end: new Date(appointment.time + 30 * 60 * 1000), // assuming each slot is 30 minutes
//         title: 'Booked Slot'
//       }));

//       setEvents(calendarEvents);
//     }

//     fetchAppointments();
//   }, []);

// }

function mapStateToProps(state) {
  return {
    courses: state//what does it return
  };
}

export default connect(mapStateToProps)(AppointmentCalender);
