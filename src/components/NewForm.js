import React from "react";
import { v4 } from "uuid";

import { Form, TextArea, Button } from "semantic-ui-react";

function NewForm(props) {
  function handleNewQuoteSubmission(event) {
    event.preventDefault();
    props.addQuote({
      author: event.target.author.value,
      postedBy: event.target.postedby.value,
      quote: event.target.quote.value,
      upvote: 0,
      downvote: 0,
      datePosted: "",
      id: v4(),
    });
    console.log("author" + event.target.author.value);
  }
  return (
    <React.Fragment>
      <Form style={{ padding: "16px" }} onSubmit={handleNewQuoteSubmission}>
        <Form.Field>
          <label>Quote Author</label>
          <input name="author" required placeholder="Quote Author" />
        </Form.Field>
        <Form.Field>
          <label>Posted by</label>
          <input required name="postedby" placeholder="Posted by" />
        </Form.Field>
        <Form.Field>
          <label>Quote</label>
          <TextArea required name="quote" placeholder="Enter Quote" />
        </Form.Field>
        <Button type="submit" style={{ marginTop: "8px" }}>
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default NewForm;
