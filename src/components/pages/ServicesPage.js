import React from 'react'
import { Box, Stack } from '@mui/material'
import ImageSlider from '../common/ImageSlider'
import ContactCard from '../common/ContactCard'
import ServicesList from '../common/ServiceList'

const ServicesPage = () => {
    const images = [
        '../media/test-image',
        '../media/test-image2',
        '../media/test-image3',
        // ... add more image URLs
    ];

    const services = [
        { name: 'Service 1', price: '$100' },
        { name: 'Service 2', price: '$150' },
        { name: 'Service 3', price: '$200' },
        // ... add more services
    ];

    const handleBooking = (service) => {
        console.log(`Booking for ${service.name} at ${service.price}`);
        // Handle your booking logic here, e.g., redirecting to a booking page or opening a modal
    };
  return (
      <Box height="100%" justifyContent="center">
          <Stack direction="row" width="75vw" justifyContent="center" paddingX={5} paddingY={2} m="auto" flex={1} spacing={4} sx={{ border: '1px solid gray', boxShadow: 2 }}>
              <Stack direction="column" alignItems="center" flex={2} sx={{ border: '1px solid black', boxShadow: 2 }}>
                  <ImageSlider images={images} />
                  <Stack width="100%">
                      <ServicesList services={services} onBook={handleBooking} />
                  </Stack>
              </Stack>

              <Stack direction="row" flex={1} justifyContent="flex-end">
                  <ContactCard />
              </Stack>
          </Stack>
      </Box>
  )
}

export default ServicesPage