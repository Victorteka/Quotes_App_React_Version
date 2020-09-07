import React from "react";
import { Modal } from "semantic-ui-react";
import NewForm from "./NewForm";

function QuoteForm(props) {
  return (
    <Modal
      trigger={
        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="ui animated positive button"
            style={{ width: "25%" }}
          >
            <div className="visible content">Add Quote</div>
            <div className="hidden content">
              <i aria-hidden="true" className="arrow right icon"></i>
            </div>
          </button>
        </div>
      }
      header="Add Quote!"
      content={<NewForm addQuote={props.addNewQuote} />}
      actions={[{ key: "done", content: "Done", positive: true }]}
    />
  );
}

export default QuoteForm;
