import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between border border-indigo-600 mb-2 border bg-slate-400">
      <div>
        <button className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded">
          Brainstorm
        </button>
        <button className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded">
          To-Do List
        </button>
        <button className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded">
          Running Plan
        </button>
      </div>
      <div>
        <button className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
