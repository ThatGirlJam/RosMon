// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// export const Nav = styled.nav`
//   background: #63d471;
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
//   /* Third Nav */
//   /* justify-content: flex-start; */
// `;

export const Nav = styled.nav`
  background: #f7f7f7; // Match the form background
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

// export const NavLink = styled(Link)`
//   color: #808080;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     color: #000000;
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

export const NavLink = styled(Link)`
  color: #007bff; // Match the button color
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #0056b3; // Match hover button color
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #007bff; // Match the button color
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #808080;
//   padding: 10px 22px;
//   color: #000000;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #808080;
//   }
// `;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #007bff; // Match the button color
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0056b3; // Match hover button color
    color: white;
  }
`;
