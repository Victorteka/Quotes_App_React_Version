import React from "react";
import HeaderBackground from "../assets/images/bg.jpg";

function Header() {
  const headerContainer = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeaderBackground})`,
    width: "100%",
    color: "#FFFFFF",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <React.Fragment>
      <div style={headerContainer}>
        <h1
          style={{
            paddingTop: "50px",
            paddingBottom: "12px",
            textAlign: "center",
          }}
        >
          Quotes App
        </h1>
        <div
          className="ui cards"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "12px",
          }}
        >
          <div className="ui card">
            <div className="content">
              <div className="header">Create Quote</div>
              <div className="description">Here you can create a quote</div>
            </div>
          </div>
          <div className="ui card">
            <div className="content">
              <div className="header">Upvote or downvote a quote</div>
              <div className="description">Upvote or downvote a quote</div>
            </div>
          </div>
          <div className="ui card">
            <div className="content">
              <div className="header">Track upvotes and downvotes</div>
              <div className="description">
                See the number of upvotes and number of downvotes for each quote
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </React.Fragment>
  );
}

export default Header;
