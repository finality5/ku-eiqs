import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import {Subjects} from './Subject';



export default function DropdownExampleMultipleSearchSelection({value , onChange }){
  return(
  <Dropdown
    placeholder='Subjects'
    fluid
    multiple
    search
    selection
    options={Subjects}
    onChange={onChange}
    value={value}
    
  />
  );
}


