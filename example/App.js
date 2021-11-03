import React, { useState } from "react";
import {
  Add,
  ArrowRight,
  Back,
  CheckedSquare,
  Checked,
  Clear,
  Close,
  Close2,
  Database,
  Default,
  Empty,
  Error,
  Face,
  Home,
  Info,
  Keyboard,
  Location,
  Message,
  Mine,
  Search,
  Shop,
  Success,
  UncheckedSquare,
  Unchecked,
  Warning,
  Wifi,
} from "../src/icons/index";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <div className="icon-grid">
        <div className="icon-item">
          <Add />
        </div>
        <div className="icon-item">
          <Wifi />
        </div>
        <div className="icon-item">
          <ArrowRight />
        </div>
        <div className="icon-item">
          <Back size="40" />
        </div>
        <div className="icon-item">
          <CheckedSquare />
        </div>
        <div className="icon-item">
          <Close fill="red" />
        </div>
        <div className="icon-item">
          <Close2 />
        </div>
        <div className="icon-item">
          <ArrowRight />
        </div>
        <div className="icon-item">
          <Back />
        </div>
        <div className="icon-item">
          <CheckedSquare />
        </div>
        <div className="icon-item">
          <Checked />
        </div>
        <div className="icon-item">
          <Clear />
        </div>
        <div className="icon-item">
          <Close />
        </div>
        <div className="icon-item">
          <Close2 />
        </div>
        <div className="icon-item">
          <Database />
        </div>
        <div className="icon-item">
          <Default />
        </div>
        <div className="icon-item">
          <Empty />
        </div>
        <div className="icon-item">
          <Error />
        </div>
        <div className="icon-item">
          <Face />
        </div>
        <div className="icon-item">
          <Home />
        </div>
        <div className="icon-item">
          <Info />
        </div>
        <div className="icon-item">
          <Keyboard />
        </div>
        <div className="icon-item">
          <Location />
        </div>
        <div className="icon-item">
          <Message />
        </div>
        <div className="icon-item">
          <Mine />
        </div>
        <div className="icon-item">
          <Search />
        </div>
        <div className="icon-item">
          <Shop />
        </div>
        <div className="icon-item">
          <Success />
        </div>
        <div className="icon-item">
          <UncheckedSquare />
        </div>
        <div className="icon-item">
          <Unchecked />
        </div>
        <div className="icon-item">
          <Warning />
        </div>
        <div className="icon-item">
          <Wifi />
        </div>
      </div>
    </div>
  );
};

export default App;
