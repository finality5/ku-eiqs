import React from "react";
import './Section.css'

export default function Section({ title, subtitle, dark, id }) {
  
  
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <div className="App">
       <span>  Kasetsart University &nbsp;Examination Information Querying System </span>
        </div>
      </div>
    </div>
  );
}
