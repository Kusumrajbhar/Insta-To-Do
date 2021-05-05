import React, { Component } from "react";
import "../App.css";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onchangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value, //name is a variable(key) hence this is store in changing bracket
    });
  };

  submitHandler = (e) => {
    e.preventDefault(); //prevent refereshing
    console.log("log", this.props);
    this.props.isLogin(false);
  };

  render() {
    return (
      <div className="div-login">
        <div style={{ fontSize: "30px", fontWeight: "600" }}>
          Welcome to Instagram
        </div>
        <br />
        <br />
        <form onSubmit={this.submitHandler}>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onchange={this.changeHandler}
            required
          />

          <br />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onchange={this.changeHandler}
            required
          />
          <br />
          <br />
          <button onClick={this.submitHandler} className="button">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
