export default (state = {}, action) => {
  const { author, postedBy, quote, upvote, downvote, datePosted, id } = action;
  switch (action.type) {
    case "ADD_QUOTE":
      return Object.assign({}, state, {
        [id]: {
          author: author,
          postedBy: postedBy,
          quote: quote,
          upvote: upvote,
          downvote: downvote,
          datePosted: datePosted,
          id: id,
        },
      });
    case "UPDATE_VOTE":
      const newQuote = Object.assign({}, state[id], { upvote });
      const updatedQuote = Object.assign({}, state, {
        [id]: newQuote,
      });
      return updatedQuote;
    case "UPDATE_DOWNVOTE":
      const downvotedQuote = Object.assign({}, state[id], { downvote });
      const updatedDownVoteQuote = Object.assign({}, state, {
        [id]: downvotedQuote,
      });
      return updatedDownVoteQuote;
    default:
      return state;
  }
};
