import React from "react";
import List from "../List/List";

const Dashboard = () => {
  return (
    <div className="h-dvh p-20 grid grid-cols-3 gap-4">
      <List title={"Brainstorm"} items={["pass", "shoot", "score"]} />
      <List title={"To-do List"} items={["pass", "shoot", "score"]} />
      <List title={"Running Plan"} items={["pass", "shoot", "score"]} />
    </div>
  );
};

export default Dashboard;
