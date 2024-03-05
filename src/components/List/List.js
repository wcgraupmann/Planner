import React from "react";
import Item from "../Item/Item";

const List = ({ title, items }) => {
//   console.log(items);
  return (
    <div className="border border black p-8 h-full">
      <h1 className="underline">{title}</h1>
      {items.map((item) => (
        <Item key={item} task={item} />
      ))}
    </div>
  );
};

export default List;
