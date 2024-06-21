import React from "react";

const Header = ({ menuItems, setActivePage }) => {
  return (
    <div className="header">
      <div className="menu">
        {menuItems.map((item) => (
          <h2 key={item} onClick={() => setActivePage(item)}>
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Header;
