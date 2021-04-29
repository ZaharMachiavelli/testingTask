import React from "react";
import Jason from "../../resources/JasonWood.png";
import Scroll from "./Scroll.jsx";

function Description() {
  return (
    <div className="main__container">
      <div className="main__portfolio">
        <div className="main__avatar _ibg">
          <img src={Jason} alt="Jason Wood" class="avatar " />
        </div>

        <div className="main__content">
          <h1 className="main__title main__text">About me</h1>
          <div className="main__desc main__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="main__comment">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu nulla pariatur.
            </p>
            <p className="main__name main__text">Jason Wood</p>
          </div>
        </div>
      </div>
      <div className="main__scroll">
        <Scroll text="keep scrolling, there is still more to come." />
      </div>
    </div>
  );
}

export default Description;
