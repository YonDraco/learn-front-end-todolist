import React from "react";
import Contact from "./Contact";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { filteredContactListSate, maxPageState } from "./store";

export default function Contactlist() {
  const cList = useRecoilValueLoadable(filteredContactListSate);
  const setMaxPage = useSetRecoilState(maxPageState);

  let contactListView = null;
  //console.log(cList.state);
  switch (cList.state) {
    case "loading":
      contactListView = <div> Loading...</div>;
      break;
    case "hasValue":
      contactListView = (
        <div>
          {cList.contents.data.map(u => (
            <Contact user={u} key={u.id} />
          ))}
        </div>
      );
      break;
    case "hasError":
      contactListView = <div>Has Error </div>;
      break;
    default:
      contactListView = null;
  }
  return <div>{contactListView}</div>;
}
