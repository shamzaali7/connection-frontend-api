import React from "react";
import ReactDOM from "react-dom";

const MODAL = (
  <div className="Model-main">  
    <div className="Modal-content">
      {/* // add some UI features here */}
    </div>
  </div>
);


function Modal(props) {
  return ReactDOM.createPortal(MODAL, document.querySelector("#modal"));
}


export default Modal;
