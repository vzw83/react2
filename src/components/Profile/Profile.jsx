import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://sobreespana.ru/wp-content/uploads/2017/03/alicante_valencia_spain.jpg"
          alt=""
        />
      </div>
      <div>avatar + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
