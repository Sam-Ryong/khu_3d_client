import React from "react";
import "./App.css";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Homepage from "./component/homepage";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Sidebar />

      <main className="content">
        <Homepage />
      </main>
    </div>
  );
};

export default App;
