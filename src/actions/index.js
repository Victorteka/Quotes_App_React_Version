export const addQuote = (newQuote) => {
  const {
    author,
    postedBy,
    quote,
    upvote,
    downvote,
    datePosted,
    id,
  } = newQuote;
  return {
    type: "ADD_QUOTE",
    author: author,
    postedBy: postedBy,
    quote: quote,
    upvote: upvote,
    downvote: downvote,
    datePosted: datePosted,
    id: id,
  };
};

export const updateVote = (id, newUpvote) => {
  return {
    type: "UPDATE_VOTE",
    id: id,
    upvote: newUpvote,
  };
};

export const updateDownVote = (id, newUpvote) => {
  return {
    type: "UPDATE_DOWNVOTE",
    id: id,
    downvote: newUpvote,
  };
};
