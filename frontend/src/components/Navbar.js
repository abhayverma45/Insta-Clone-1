import React,{useContext} from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/logincontext";

export default function Navbar({ login }) {
  const{setmodalOpen} =useContext(LoginContext)
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
          <Link to="profile">
            <li>Profile</li>
          </Link>
          <Link to="/createPost">Create Post</Link>
          <Link to={""}>
            <button className="primaryBtn" onClick={()=>setmodalOpen(true)}>log Out</button>
          </Link>
        </>,
      ];
    } else {
      return [
        <>
          <Link to="/signup">
            <li>SignUp</li>
          </Link>
          <Link to="signin">
            <li>SignIn</li>
          </Link>
        </>,
      ];
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt=" "></img>
      <ul className="nav-menu">{loginStatus()}</ul>
    </div>
  );
}
