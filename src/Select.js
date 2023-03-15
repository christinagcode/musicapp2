import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CustomSelect() {
  const [rabbits, setRabbits] = React.useState('');

  const handleChange = (event) => {
    setRabbits(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rabbits</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rabbits}
          label="rabbits"
          onChange={handleChange}
        >
          <MenuItem value="netherland dwarf">Jojo</MenuItem>
          <MenuItem value="holland lop">Tophi</MenuItem>
          <MenuItem value="Rex">Rufus</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}