import React, { Component } from "react";
import { Card } from "semantic-ui-react";
export class CardShow extends Component {
  render() {
    return (
      <Card.Group style={{marginLeft:10 , marginTop:"2em"}}>
        <Card fluid color="black" header="Subject 1" />
        <Card fluid color="black" header="Subject 2" />
        <Card fluid color="black" header="Subject 3" />
      </Card.Group>
    );
  }
}

export default CardShow;
