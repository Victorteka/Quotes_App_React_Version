import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import QuoteForm from "./QuoteForm";
import QuoteList from "./QuoteList";
import * as a from "../actions/index";

class QuoteControl extends Component {
  handleUpvote = (id) => {
    const { dispatch } = this.props;
    Object.values(this.props.masterQuotesList).forEach((quote) => {
      if (quote.id === id) {
        const newUpvote = quote.upvote + 1;
        const action = a.updateVote(quote.id, newUpvote);
        dispatch(action);
      }
    });
  };

  handleDownvote = (id) => {
    const { dispatch } = this.props;
    Object.values(this.props.masterQuotesList).forEach((quote) => {
      if (quote.id === id) {
        const newDownvote = quote.downvote + 1;
        const action = a.updateDownVote(quote.id, newDownvote);
        dispatch(action);
      }
    });
  };

  handleAddingNewQuote = (newQuote) => {
    const { dispatch } = this.props;
    const action = a.addQuote(newQuote);
    dispatch(action);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <QuoteForm addNewQuote={this.handleAddingNewQuote} />
        <QuoteList
          quoteList={this.props.masterQuotesList}
          upvoteHandler={this.handleUpvote}
          downvoteHandler={this.handleDownvote}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    masterQuotesList: state,
  };
};

QuoteControl = connect(mapStateToProps)(QuoteControl);

export default QuoteControl;
