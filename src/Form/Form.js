import React, { useState } from "react";
import "../App.css";

function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    textarea: "",
    nameError: "",
    emailError: "",
    numberError: ""
  });

const validate = () => {
   let nameError= "";
   let emailError= "";
   let numberError= ""

   if (!state.name) {
     nameError ='Name Can not be Blank'
   }
   if (!state.email.includes('@')) {
       emailError = 'Invalid Email'
   }
   if (!state.name) {
    numberError ='Name Can not be Blank'
  }
   if (emailError || nameError||numberError) {
       setState({emailError, nameError, numberError})   //  setState({emailError:emailError, nameError:nameError})
       //return false     //after this return will able to see the include notify for including @
   }
   return true        //after this return will able to see the value in console
}

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const submitHander = (e) => {
    e.preventDefault();
    const isValid = validate()
    if (isValid) {
        console.log(state)
    }
    //alert(JSON.stringify(state));
  };
  return (
    <div className="App">
      <form onSubmit={submitHander}>
        <label>Name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={changeHandler}
        />
        <div style={{fontSize:'14px',color:'red'}}>{state.nameError}</div>

        <br />
        <br />
        <label>Email: </label>
        <br />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={changeHandler}
        />
          <div style={{fontSize:'14px',color:'red'}}>{state.emailError}</div>
        <br />
        <br />
        <label>Mobile No: </label>
        <br />
        <input
          type="number"
          name="mobile"
          value={state.mobile}
          onChange={changeHandler}
        />
          <div style={{fontSize:'14px',color:'red'}}>{state.numberError}</div>
        <br />
        <br />
        <label>Message: </label>
        <br />
        <textarea
          name="textarea"
          value={state.textarea}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;

// alert(`my name is ${state.name}.
// my email is ${state.email}.
// my number is ${state.number}.
// my message is ${state.textarea}.`)
