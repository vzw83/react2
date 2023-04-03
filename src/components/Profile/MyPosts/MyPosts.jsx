import React from "react";
import s from  "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea placeholder="New post"></textarea>
        <button>жмии</button>
      </div>
      <div className={s.posts}>
        <Post message='Привет!' like='56'/>
        <Post message='я, пишу первый пост' like='126'/>
        <Post message='с помощью props' like='11226'/>
      </div>
    </div>
  );
};

export default MyPosts;
