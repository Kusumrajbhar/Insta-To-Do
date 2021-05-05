import React from "react";
//import { DropdownMultiple, Dropdown } from "reactjs-dropdown-component";
import { useHistory } from "react-router-dom";

function DropDown() {
  const history = useHistory();

  const onChangeHandle = (value) => {
    history.push(value);
  };
  return (
    <div>
      <select onChange={(e) => onChangeHandle(e.target.value)}>
        <option value=''>Menu</option>
        <option value="/">Home</option>
        <option value="/post">Post</option>
        {/* <option value='/'>Menu</option> */}
      </select>
    </div>
  );
}

export default DropDown;

// const Posts = [
//   {
//     label: "Dance",
//     value: "Dance",
//   },
//   {
//     label: "Party",
//     value: "Party",
//   },
//   {
//     label: "Trip",
//     value: "Trip",
//   },
// ];

{
  /* <Dropdown
        name="location"
        title="Select location"
        list={Posts}
        onChange={onChange}
      /> */
}
