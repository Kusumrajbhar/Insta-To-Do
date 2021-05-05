import React from 'react'
import Header from '../header/Header'
import {Switch, Route} from 'react-router-dom'
import NewHome from '../newHome/NewHome'
import Explore from '../explore/Explore'

function Home(props) {
    //const logOutProp = props.logOut(false)
    return (
        <div>
            {/* <Header logOutProp={logOutProp}/> */}
            <Header />
            <Switch>
                <Route exact path='/'component={NewHome}/>
                <Route exact path='/explore' component={Explore} />
            </Switch>
        </div>
    )
}

export default Home
