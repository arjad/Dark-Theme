import React from "react";
import "../styles/DarkMode.css";
const DarkMode = () => 
{
  const body = document.body;
  const dark=(e)=>
  {
    body.classList.add("dark");
  }
  const light=(e)=>
  {
    body.classList.remove("dark");
  }

  return (
  <div className="div my-4 mr-5">
    <button onClick={(e) => { dark(e) } } >
      Dark Mode
    </button>
    <button onClick={(e) => { light(e)} } >
     Light Mode
    </button>
  </div>
  );
};
export default DarkMode;
