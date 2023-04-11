import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // let posts = [
  //   { id: 1, message: "Привет", likesCount: 12 },
  //   { id: 2, message: "я, пишу первый пост", likesCount: 15},
  //   { id: 3, message: "с помощью props", likesCount: 120},  
  //   { id: 4, message: "blabla", likesCount: 15},
  //   { id: 5, message: "hi", likesCount: 120}   
  // ];
  
  let postsElements = 
      props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.postBlock}>
      <h3>
        My posts
      </h3>
      
      <div>
        <div>
          <textarea placeholder="New post"></textarea>
        </div>
        <div>
          <button>жмии</button>
        </div>
      </div>
      <div className={s.posts}>
       {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
