import React, { Component } from "react";
import { Grid, Icon, List ,Divider} from "semantic-ui-react";
export class Filter extends Component {
  render() {
    return (
    
    
    <Grid centered>
    <Grid.Column width={6} >
    <Divider fitted />
      <List animated selection verticalAlign="middle" relaxed="very">
        <List.Item>
          <Icon name="user" size="large"   />
          <List.Content>
            <List.Header>{this.props.userData.userdata.name}</List.Header>
          </List.Content>
        </List.Item>

        <List.Item>
        <Icon name="id badge outline" size="large"  />
          <List.Content>
            <List.Header>
            {this.props.userData.userdata.stdid}
            </List.Header>
          </List.Content>
          
          <Icon name="at" size="large"  />
          <List.Content>
            <List.Header>
              {this.props.userData.group === "s" ? "Student" : "Admin"}
            </List.Header>
          </List.Content>
        </List.Item>

        
      
        <List.Item>
        <Icon name="home" size="large"  />
          <List.Content>
            <List.Header>
            {this.props.userData.userdata.department}
            </List.Header>
          </List.Content>
        </List.Item>

        <List.Item>
          <Icon name="building outline" size="large"  />
          <List.Content>
            <List.Header>
            {this.props.userData.userdata.faculty}
            </List.Header>
          </List.Content>
        </List.Item>

       
        <List.Item>
          <Icon name="mail" size="large"  />
          <List.Content>
            <List.Header>
            {this.props.userData.userdata.email}
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
