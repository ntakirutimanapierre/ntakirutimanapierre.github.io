import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const menuItems = [
    "Pierre Ntakirutimana",
    "Education",
    "Experience",
    "Projects",
  ];

  const [activePage, setActivePage] = useState(menuItems[0]);

  return (
    <div className="app">
      <Header menuItems={menuItems} setActivePage={setActivePage} />
      <div className="body">
        <div className="left">
          <Profile />
        </div>
        <div className="right">
          <Content activePage={activePage} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
