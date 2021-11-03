# Xun Icons for React

## Install

use `npm`

```node
npm i xun-icons
```

or use `yarn`

```node
yarn add xun-icons
```

## Usage

```
import React from "react";
import ReactDOM from "react-dom";
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
  Default as ErrorDefault,
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
} from "xun-icons";

const App = () => {
  return (
    <div className="app">
      <Add />
      <ArrowRight />
      <Back size="40" />
      <Close fill="red" />
      <CheckedSquare />
      <Checked />
      <Clear />
      <Close />
      <Close2 />
      <Database />
      <ErrorDefault />
      <Empty />
      <Error />
      <Face />
      <Home />
      <Info />
      <Keyboard />
      <Location />
      <Message />
      <Mine />
      <Search />
      <Shop />
      <Success />
      <UncheckedSquare />
      <Unchecked />
      <Warning />
      <Wifi />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```
