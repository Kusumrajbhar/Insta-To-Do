import "./App.css";
import React, { useState, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
//import Login from './login/Login'
//import Home from './home/Home'
//import ErrorPage from './404Page/ErrorPage';
import Header from "./header/Header";
import { UserProvider } from "./UserContext";
import DropdownNormal from "./DropdownNormal";
import Post from "./header/Post";

//lazy loading
import SuspenseFallback from "./SuspenseFallback";
const Login = lazy(() => import("./login/Login"));
const Home = lazy(() => import("./home/Home"));
const ErrorPage = lazy(() => import("./404Page/ErrorPage"));

function App() {
  const [isLog, setIsLog] = useState(true);

  const logPropHandler = (value) => {
    setIsLog(value); // this.props.isLogin(true) this true value returned at (value) makes -- setIsLog(true) i.e isLog set to true
    console.log("value", value);
  };

  return (
    <div className="App">
      {/* <DropdownNormal /> */}
      <Suspense fallback={<SuspenseFallback />}>
        <Switch>
          {isLog ? (
            <Route
              exact
              path="/"
              component={() => <Login isLogin={logPropHandler} />}
            />
          ) : (
            <>
              <Route
                path="/"
                component={() => <Home logOut={logPropHandler} />}
              />
              <Route exact path="/post" component={Post} />
            </>
          )}

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

//'*' all
//  <Route  path='/' component={() => !isLog ? <Login isLogin = {logPropHandler}/> : <Home />} />
// <Route path='/' component={()=> <UserProvider logOut = {logPropHandler} ><Home /></UserProvider> } />
