import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CardCAuto() {
  return (
    <Autocomplete
      disablePortal
      id="quality-box-demo"
      options={quality}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Normal" />}
    />
  );
}

const quality = [
  {label: 'Normal'},
  {label: 'Stereo'},
  {label: 'Mono'},
  {label: 'Surround'}
];