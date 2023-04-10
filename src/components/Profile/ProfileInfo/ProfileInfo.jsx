import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://sobreespana.ru/wp-content/uploads/2017/03/alicante_valencia_spain.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
