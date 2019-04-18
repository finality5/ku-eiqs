import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import {SubjectsDrop} from './subjectsDrop';




export default function DropdownExampleMultipleSearchSelection({value , onChange }){
  return(
  <Dropdown
    placeholder='Subjects'
    className="backgroundColor:#A5D2FF"
    fluid
    lazyLoad
    multiple
    search
    selection
    minCharacters={2}
    options={SubjectsDrop}
    onChange={onChange}
    value={value}
    
  />
  
  );
}


