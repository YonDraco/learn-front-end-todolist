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
    <div className="footer">
      <span className="text">By YonDraco</span>
    </div>
  );
}