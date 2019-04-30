import React, { Component } from "react";
import { Card, Icon, List } from "semantic-ui-react";
export class CardShow extends Component {
  render() {
    return this.props.selectedData.map(subj => (
      <Card.Group
        centered
        stackable
        style={{ marginLeft: "2em", marginTop: "2em" }}
        key={subj.key}
      >
        <Card link fluid color="black">
          <Card.Content style={{backgroundColor:"#f9fafb"}}>
            <Card.Header>
              {subj.key} &nbsp;&nbsp;&nbsp;{subj.coursename}
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <List>
              <List.Item>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Icon name="pin" />
                &nbsp;&nbsp;Section {subj.sec}
              </List.Item>
              <List.Item>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Icon name="calendar check" />
                &nbsp;&nbsp;{subj.date}
              </List.Item>
              <List.Item>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Icon name="clock" />
                &nbsp;&nbsp;{subj.time}
              </List.Item>
              <List.Item>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Icon name="building" />
                &nbsp;&nbsp;{subj.room}
              </List.Item>
            </List>
          </Card.Content>
        </Card>
        
      </Card.Group>
    ));
  }
}

export default CardShow;
