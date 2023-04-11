import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  // let posts = [
  //   { id: 1, message: "Привет", likesCount: 12 },
  //   { id: 2, message: "я, пишу первый пост", likesCount: 15},
  //   { id: 3, message: "с помощью props", likesCount: 120},  
  //   { id: 4, message: "blabla", likesCount: 15},
  //   { id: 5, message: "hi", likesCount: 120}   
  // ];
  return (
    <div>
      <ProfileInfo/>     
      <MyPosts posts={props.posts}/>

    </div>
  );
};

export default Profile;
