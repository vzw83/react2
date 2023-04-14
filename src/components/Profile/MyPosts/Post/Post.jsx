import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="http://mobimg.b-cdn.net/v3/fetch/03/0347bd3579f7cbf10523c1692f8dfa52.jpeg"
        alt="ava"
      />
      {props.message};
      
      <div>
        <span>Like</span>{props.like}
      </div>
    </div>
  );
};

export default Post;
