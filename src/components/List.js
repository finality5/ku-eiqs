import React, { Component } from "react";
import { List, Icon,Input } from "semantic-ui-react";



export class ListExport extends Component {



  onChange = (e) => {
    this.props.AddSec(e.target.value,e.target.name)
    
  }

  
  

  render() {
    console.log(this.props.res);
    return this.props.res.map(subj => (
      <List.Item key={subj.key}>
        
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
        
        
          
        
       
          <div style={{ color:"black" ,float:"left" }}>
          <span>
          <Icon  name="book"  />
          &nbsp;&nbsp;{subj.key}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{subj.name}
            </span>
         </div>
      </List.Item>
    ));
  }
}

export default ListExport;
