import React, { Component } from "react";
import { Grid, Icon, List ,Divider} from "semantic-ui-react";
export class Filter extends Component {
  render() {
    return (
    
    
    <Grid centered>
    <Grid.Column width={3} >
    <Divider fitted />
      <List animated selection verticalAlign="middle" relaxed="very">
        <List.Item>
          <Icon name="user" size="large"   />
          <List.Content>
            <List.Header>{this.props.userData.userdata.name}</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name="at" size="large"  />
          <List.Content>
            <List.Header>
              {this.props.userData.group === "s" ? "Student" : "Lecturer"}
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
      
      </Grid.Column>
      </Grid>
      
     
    );
  }
}

export default Filter;
