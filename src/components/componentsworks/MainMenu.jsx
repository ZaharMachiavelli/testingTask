import React from "react";

function MainMenu() {
  return (
    <div className="main__header">
      <nav className="main__menubody">
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
    </div>
  );
}

export default MainMenu;
