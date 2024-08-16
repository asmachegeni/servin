import { NavLink } from "react-router-dom";
import logo from "./../../assets/servin-logo-1.png";
import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Nav = () => {
  const [classn, setClassn] = useState<string>("right-nav nav-hidden");
  return (
    <nav className={"nav-container"}>
      <GiHamburgerMenu
        color={"#ffbc00"}
        className="nav-close"
        onClick={() => {
          setClassn("right-nav nav-show");
        }}
      />
      <NavLink to={"/"} className="left-nav">
        <img src={logo} className="nav-logo" />
        <p className="nav-logog-name">شرکت سروین</p>
      </NavLink>
      <div className={classn}>
        <AiOutlineClose
          color={"#ffbc00"}
          className="nav-close"
          onClick={() => {
            setClassn("right-nav nav-hidden");
          }}
        />
        <NavLink
          to={"/"}
          className={(state: any) =>
            state.isActive ? "nav-link-active" : "nav-link"
          }
          onClick={() => {
            setClassn("right-nav nav-hidden");
          }}
        >
          خانه
        </NavLink>
        <NavLink
          to={"/about"}
          className={(state: any) =>
            state.isActive ? "nav-link-active" : "nav-link"
          }
          onClick={() => {
            setClassn("right-nav nav-hidden");
          }}
        >
          درباره ما
        </NavLink>
        <NavLink
          to={"/contact"}
          className={(state: any) =>
            state.isActive ? "nav-link-active" : "nav-link"
          }
          onClick={() => {
            setClassn("right-nav nav-hidden");
          }}
        >
          تماس با ما
        </NavLink>
        <NavLink
          to={"/services"}
          className={(state: any) =>
            state.isActive ? "nav-link-active" : "nav-link"
          }
          onClick={() => {
            setClassn("right-nav nav-hidden");
          }}
        >
          خدمات
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
