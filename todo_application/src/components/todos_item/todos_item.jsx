import React from "react";

function Todos_item({ content, active }) {
   
  return (
    <div className="todos_item">
      <span className={active ? "todos_item__active" : ""}>{content}</span>
    </div>
  );
  
}

const Views = (elems) = {
    return (
        <div className="todos"></div>
    )
}


export default Todos_item;
