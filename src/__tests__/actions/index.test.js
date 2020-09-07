import * as a from "../../actions/index";
import { v4 } from "uuid";

describe("test quote actions", () => {
  it("should create add quote action", () => {
    expect(
      a.addQuote({
        author: "Albert Einstein",
        postedBy: "Victor Teka",
        quote: "I have no special talent. I am only passionately curious.",
        upvote: 0,
        downvote: 0,
        datePosted: "",
        id: v4(),
      })
    ).toEqual({
      type: "ADD_QUOTE",
      author: "Albert Einstein",
      postedBy: "Victor Teka",
      quote: "I have no special talent. I am only passionately curious.",
      upvote: 0,
      downvote: 0,
      datePosted: "",
      id: v4(),
    });
  });
});
