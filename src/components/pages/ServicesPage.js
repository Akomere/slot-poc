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

  return (
      <Box height="100%" justifyContent="center">
          <Stack direction="row" width="75vw" justifyContent="center" paddingX={5} paddingY={2} m="auto" flex={1} spacing={4} sx={{ border: '1px solid gray', boxShadow: 2 }}>
              <Stack direction="column" alignItems="center" flex={2} sx={{ border: '1px solid black', boxShadow: 2 }}>
                  <ImageSlider images={images} />
                  <Stack width="100%">
                      <ServicesList />
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