import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const NavbarSignup = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          {/* <NavLink to="/signin">Signin</NavLink> */}
          <NavBtn>
            <NavBtnLink to="/signun">Sign Up for RosMon</NavBtnLink>
          </NavBtn>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign Up for User</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavbarSignup;
