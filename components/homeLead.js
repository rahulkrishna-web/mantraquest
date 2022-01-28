import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';


export default function HomeLead() {
   
  return (
    <div>
        <Box>
            <Paper sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 5}}>
                <Typography variant='h3'>Mantra Quest : Crack the Success Code</Typography>
                <Typography variant='subtitle1'>Cracking the Success Code in Mantra</Typography>
            </Paper>
        </Box>
    </div>
  );
}
