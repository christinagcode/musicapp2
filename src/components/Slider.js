import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function DiscreteSlider({state, setState}) {

    const handleChange = (e) => {
        setState(e.target.value)
    }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={state}
        step={10}
        marks
        min={0}
        max={100}
        onChange = {handleChange}
      />
    </Box>
  );
}