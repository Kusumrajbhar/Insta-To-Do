import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
  const logoutHandler = (e) => {
        e.preventDefault()    //prevent refereshing
        this.props.logOut(false)
      }
    return (
        <nav>
            <div className='div-header'>
                <div className='text'>Logo</div>
                <div className='text'>
                    <NavLink to='/' className='text' activeClassName='active'>Home</NavLink>{''}
                    <NavLink to='/explore' className='text'>Explore</NavLink>
                    {/* <Link to='/login'> */}
                    <button className='header-button' activeClassName='active'>Log Out</button>
                    {/* </Link> */}
                </div>
            </div>          
        </nav>
    )
}

export default Header
