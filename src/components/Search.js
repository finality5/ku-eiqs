import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import {Subjects} from './Subject';





const DropdownExampleMultipleSearchSelection = () => (
  <Dropdown
    placeholder='Subjects'
    fluid
    multiple
    search
    selection
    options={Subjects}
    
  />
)

export default DropdownExampleMultipleSearchSelection
