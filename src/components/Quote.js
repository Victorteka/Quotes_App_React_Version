import React from "react";
import { Button, Card } from "semantic-ui-react";

function Quote(props) {
  return (
    <React.Fragment>
      <Card.Group>
        <Card style={{ width: "50%", margin: "auto", marginTop: "20px" }}>
          <Card.Content>
            <Card.Header>Authored by: {props.author}</Card.Header>
            <Card.Description>
              {props.quoteContent}
              <br /> <strong>Posted by: {props.postedBy}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                basic
                color="green"
                onClick={() => props.increaseVote(props.id)}
              >
                Upvote {props.upvote}
              </Button>
              <Button
                basic
                color="red"
                onClick={() => props.increaseDownVote(props.id)}
              >
                Downvote {props.downvote}
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </React.Fragment>
  );
}

export default Quote;
