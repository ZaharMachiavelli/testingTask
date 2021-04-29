import React from "react";

function Menu({ color }) {
  return (
    <>
      <div className="menu__icon icon_menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="menu__body">
        <ul className="menu__list">
          <li>
            <a href="#" className="menu__link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="menu__link">
              About me
            </a>
          </li>
          <li>
            <a href="#" className="menu__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="menu__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Menu;
