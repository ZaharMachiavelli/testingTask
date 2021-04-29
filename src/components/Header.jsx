import React from "react";
import Menu from "./componentsworks/Menu";
import Scroll from "./componentsworks/Scroll";
function Header() {
  return (
    <header className="header ">
      <div className="header__content _container">
        <div className="header__menu menu">
          <Menu color="white" />
        </div>
      </div>
      <div className="header__scroll white">
        <Scroll text="Scroll down to see more" />
      </div>
    </header>
  );
}
export default Header;
