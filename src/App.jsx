import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  // let posts = [
  //   { id: 1, message: "Привет", likesCount: 12 },
  //   { id: 2, message: "я, пишу первый пост", likesCount: 15},
  //   { id: 3, message: "с помощью props", likesCount: 120},  
  //   { id: 4, message: "blabla", likesCount: 15},
  //   { id: 5, message: "hi", likesCount: 120}   
  // ];
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="profile" 
            element={<Profile 
              posts = {props.appState.posts} />} />
            <Route path="dialogs" 
            element={<Dialogs 
              dialogs = {props.appState.dialogs} 
              messages = {props.appState.messages} />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
