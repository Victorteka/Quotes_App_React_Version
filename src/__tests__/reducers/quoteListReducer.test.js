import quoteListReducer from "../../reducers/quoteListReducer";

describe("quoteListReducer", () => {
  let action;
  const quoteData = {
    1: {
      author: "Albert Einstein",
      postedBy: "Victor Teka",
      quote: "I have no special talent. I am only passionately curious.",
      upvote: 0,
      downvote: 0,
      datePosted: "",
      id: 1,
    },
  };

  test("should return default state if no action is recognized", () => {
    expect(quoteListReducer({}, { type: null })).toEqual({});
  });

  test("should successfully add new quote data to masterQuoteList", () => {
    const {
      author,
      postedBy,
      quote,
      upvote,
      downvote,
      datePosted,
      id,
    } = quoteData;
    action = {
      type: "ADD_QUOTE",
      author: author,
      postedBy: postedBy,
      quote: quote,
      upvote: upvote,
      downvote: downvote,
      datePosted: datePosted,
      id: id,
    };
    expect(quoteListReducer({}, action)).toEqual({
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
  });
});
