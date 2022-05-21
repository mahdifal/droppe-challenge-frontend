import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./assets/css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <App
      products={[]}
      prodCount={0}
      loading={false}
      error={undefined}
      isShowingMessage={false}
      message={""}
      numFavorites={0}
      isOpen={false}
      favClick={function (title: string): void {
        console.log(title);
      }}
      setIsOpen={function (value: React.SetStateAction<boolean>): void {
        console.log(value);
      }}
      onSubmit={function (payload: {
        title: string;
        description: string;
        price: string;
      }): void {
        console.log(payload);
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
