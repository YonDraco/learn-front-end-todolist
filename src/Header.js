import React from "react";
import "./index.css";
import { useState } from "react";
import RecoilRoot from "recoil";
import { useRecoilState } from "recoil";
import { filterState } from "./store";

export default function Header() {
  //logic
  const [filterVal, setFilter] = useRecoilState(filterState);
  return (
    <div className="header">
      <h1>Contact Manager</h1>
      <input
        className="search"
        type="text"
        placeholder="Search ..."
        value={filterVal}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
}
