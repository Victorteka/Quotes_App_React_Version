import React, { Component } from "react";
import Quote from "./Quote";

class QuoteList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>All Quotes</h1>
        {Object.values(this.props.quoteList).map((quote) => (
          <Quote
            author={quote.author}
            postedBy={quote.postedBy}
            quoteContent={quote.quote}
            upvote={quote.upvote}
            downvote={quote.downvote}
            id={quote.id}
            key={quote.id}
            fullQuote={quote}
            increaseVote={this.props.upvoteHandler}
            increaseDownVote={this.props.downvoteHandler}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default QuoteList;
