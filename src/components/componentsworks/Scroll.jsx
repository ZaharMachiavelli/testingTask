import React from "react";
import arrow from "../../resources/DoubleArrow.png";

function Scroll({ text }) {
  return (
    <div className="scroller">
      <p className="scroller__desc">{text}</p>
      <a className="scroller__img">
        <img src={arrow} alt="double arrow" />
      </a>
    </div>
  );
}

export default Scroll;
