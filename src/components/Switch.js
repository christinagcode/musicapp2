import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function BasicSwitches({state, setState}) {
  return (
    <div>
      <Switch defaultChecked value={state} onChange ={()=>setState(!state)} />
    </div>
  );
}