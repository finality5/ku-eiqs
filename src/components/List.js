import React, { Component } from 'react'
import { List , Icon ,Button , Input } from 'semantic-ui-react'





export class ListExport extends Component {
  render() {
      console.log(this.props.res)
    return this.props.res.map((subj) => (
        
        <List.Item key={subj.key}>
            <List.Content floated="right">
            <div>
                
                <Input type="number" min="0" max="999" placeholder='Section' size="small" style={{fontSize:"14px" , width:"90px" , marginRight:"5px" , height:"30.84px" }} />
                
                <Button icon='remove' color='red' size="tiny" />
            </div>
            </List.Content> 
            <List.Content floated="left">
                <Icon color='blue' name='book' size="small" />
            </List.Content>
            <List.Content>
                <List.Header style={{fontFamily:'Roboto'}}>{subj.key} {subj.name}</List.Header>
            </List.Content>
        </List.Item>)
        
    
    )
  }
}

export default ListExport


