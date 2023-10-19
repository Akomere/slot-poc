import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function ContactCard() {
  return (
      <Card sx={{ maxWidth: 400, height: "100vh" }}>
          <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
          />
          <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                  Contact and Work hours
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
          </CardActions>
      </Card>
  )
}

export default ContactCard