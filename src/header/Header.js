import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'
import {UserConsumer} from '../UserContext'

function Header(props) {
  const logoutHandler = (e) => {
        e.preventDefault()    //prevent refereshing
       // props.logOut(false)
       //props.logOutProp()
      }
    return (
        <nav>
            <div className='div-header'>
                <div className='text'>Logo</div>
                <div className='text'>
                    <NavLink to='/' className='text' activeClassName='active'>Home</NavLink>{''}
                    <NavLink to='/explore' className='text'>Explore</NavLink>
                    {/* <UserConsumer>
                        {
                          (logOut) => { */}
                          <button className='header-button' activeClassName='active' onClick={'kus'}>Log Out</button>
                          {/* }  
                        }
                   
                   </UserConsumer> */}
                </div>
            </div>          
        </nav>
    )
}

export default Header
