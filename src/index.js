import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import state from "./redux/state";

let posts = [
  { id: 1, message: "Привет", likesCount: 12 },
  { id: 2, message: "я, пишу первый пост", likesCount: 15 },
  { id: 3, message: "с помощью props", likesCount: 120 },
  { id: 4, message: "blabla", likesCount: 15 },
  { id: 5, message: "hi", likesCount: 120 }
];

let dialogs = [
  { id: 1, name: "Vova" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sergey" },
  { id: 4, name: "Olga" },
  { id: 5, name: "Lexa" }
];

let messages = [
  { id: 1, message: "привет" },
  { id: 2, message: "как дела?" },
  { id: 3, message: "учу реакт" }
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts ={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
