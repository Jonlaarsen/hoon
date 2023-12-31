import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <Menu
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      {...props}
    >
      <Link onClick={closeSideBar} className="menu-item" to="/">
        Home
      </Link>

      <a onClick={closeSideBar} className="menu-item" href="#skateboard">
        skateboarding
      </a>

      <a onClick={closeSideBar} className="menu-item" href="#snowboard">
        Snowboard
      </a>

      <a onClick={closeSideBar} className="menu-item" href="#contact">
        Contact us
      </a>
    </Menu>
  );
};
