import React, { Component } from "react";
import { List, Icon,Input,Grid } from "semantic-ui-react";



export class ListExport extends Component {



  onChange = (e) => {
    this.props.AddSec(e.target.value,e.target.name)
    
  }

  
  

  render() {
    console.log(this.props.res);
    return this.props.res.map(subj => (
      <List.Item key={subj.key}>
        <Grid.Column width={4}>
          <div style={{float:"right"}}>
            <Input
              name={subj.key}
              type="number"
              min="1"
              max="999"
              placeholder="Section"
              size="small"
              style={{
                fontSize: "14px",
                width: "90px",
                marginRight: "5px",
                height: "30.84px",
                
              }}
              onChange={this.onChange}
              
            />

            <Icon name="remove circle" color="red" size="small" onClick={()=>this.props.Del(subj.key)} />
          </div>
          </Grid.Column>
        
        
          
        
          <Grid.Column width={1} style={{float:"left" , width:30}}>
          <Icon  name="book"  />
          </Grid.Column>
          <Grid.Column width={3} style={{ color:"black" ,float:"left" , width:80}}>
          {subj.key}
          </Grid.Column>
          <Grid.Column container="true" width={8} style={{ color:"black" ,float:"left" , width:240}}>
          {subj.name}
          </Grid.Column>
          
        
      </List.Item>
    ));
  }
}

export default ListExport;
