import './App.css';
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './login/Login'
import Home from './home/Home'
import ErrorPage from './404Page/ErrorPage';
import Header from './header/Header';
import {UserProvider} from './UserContext'

function App() {
  const [isLog, setIsLog] = useState(false)

  const logPropHandler = () => {
    setIsLog({isLog})
  }

  return (
    <div className="App">
     
     <Switch>
       {
         !isLog ?
         <Route exact path='/' component={()=><Login isLogin = {logPropHandler} />} />
         :
         <Route path='/' component={()=><UserProvider logOut = {logPropHandler} ><Home /></UserProvider> } />
       }
  
     <Route  path='*' component={ErrorPage} />
     {/* <Route render={()=><Login logOut = {logPropHandler} />}/> */}
     </Switch>
    </div>
  );
  
}

export default App;

//'*' all
  //  <Route  path='/' component={() => !isLog ? <Login isLogin = {logPropHandler}/> : <Home />} />