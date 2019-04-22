import React from 'react'
import { Image, List , Icon , Dropdown , Button , Select} from 'semantic-ui-react'

const options = [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
  ]

const ListExampleSelection = () => (

<List divided selection verticalAlign='middle' size="massive">
    <List.Item>
        <List.Content floated="right">
            <Button basic color='blue' content='Blue'>
                <Dropdown inline options={options} placeholder="Select Section"/> 
            </Button>
            <Button icon='remove' color='red' />
        </List.Content>
        <List.Content floated="left">
            <Icon color='blue' name='book' size="small" />
        </List.Content>
        <List.Content>
            <List.Header><p>Subject1</p></List.Header>
        </List.Content>
    </List.Item>
</List>
  
  


)

export default ListExampleSelection
