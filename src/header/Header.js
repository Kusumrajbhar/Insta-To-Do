import React from "react";
//import { DropdownMultiple, Dropdown } from "reactjs-dropdown-component";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { UserConsumer } from "../UserContext";
import Post from "./Post";
import DropDown from './DropDown'

function Header(props) {
  return (
    <nav>
      <div className="div-header">
        <div className="text">Logo</div>
        <div>
         <DropDown />
        </div>

        <div className="text">
          <NavLink to="/" className="text" activeClassName="active">
            Home
          </NavLink>
          {""}
          <NavLink to="/explore" className="text">
            Explore
          </NavLink>
          {/* <UserConsumer>
            {(logOut) => {
              {
                console.log("logout", logOut);
              }
              return (
                <button
                  className="header-button"
                  activeClassName="active"
                  onClick={() => logOut(false)}
                >
                  Log Out
                </button>
              );
            }}
          </UserConsumer> */}
          <button
            className="header-button"
            activeClassName="active"
            onClick={() => props.logOut(true)}
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;

{
  /* <UserConsumer>
                        {
                          (logOut) => {
                               { console.log('logout', logOut )}
                          return <button className='header-button' activeClassName='active' onClick={()=>logOut(false)}>Log Out</button>
                          
                           }  
                        }                  
                   </UserConsumer>  */
}






 {/* <select>       
            <option value={Post}>POST</option>
            <option value="1">REELS</option>
            <option value="2">FOLLOWERS</option>
            <option value="3">FOLLOWING</option>
            <option value="4">LIKES</option>
          </select> */}