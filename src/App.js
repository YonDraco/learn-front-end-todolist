import React from "react";
import "./index.css";
import Header from "./Header";
import Pager from "./Pager";
import Footer from "./Footer";
import ContactList from "./ContactList";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <ContactList />
        <Pager />
        <Footer/>
      </div>
    </RecoilRoot>
  );
}
