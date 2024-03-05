import React from "react";

const Item = ({ task }) => {
  //   console.log("task", task);
  return (
    <div className="border border black p-8 ">
      <p className="m-2">{task}</p>
    </div>
  );
};

export default Item;
