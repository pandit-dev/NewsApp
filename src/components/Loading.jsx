import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-center">
      <button className="btn" type="button">
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status"> Loading...</span>
      </button>
    </div>
  );
};

export default Loading;
