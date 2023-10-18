import * as React from 'react';
import { Radio, Stack, Typography } from "@mui/material";

export default function Service() {

    return(
        <Stack direction="row" justifyContent="space-between" sx={{ border: '1px solid gray', p: 2 }}>
              <Stack direction="column" flex={1}>
                <Typography variant="h6" gutterBottom> Braids </Typography>
                <Typography variant="body1" gutterBottom>
                  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                  quasi quidem quibusdam.
                </Typography>
              </Stack>
              <Stack flex={1} direction="row" justifyContent="center">
                <Stack direction="column">
                  <Typography>£89.00</Typography>
                  <Typography>50min</Typography>
                </Stack>
              </Stack>
              <Stack><Radio></Radio></Stack>
        </Stack>
    );
}


