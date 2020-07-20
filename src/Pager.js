import React from "react";
import { useRecoilState } from "recoil";
import { currentPageState } from "./store";

export default function Pager() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  return (
    <div className="pager">
      <div
        className="arrow-left"
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
      />
      <div className="current-page">{currentPage}</div>
      <div
        className="arrow-right"
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  );
}
