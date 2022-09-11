import React from "react";
import { useSelector } from "react-redux";
import "../main.scss";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";

const ProfileCard = () => {
  const {
    user: { avatar, name },
    score,
  } = useSelector((state) => state.reducer);

  const handleScore = (score) => {
    if (score <= 30) {
      return { color: "header-one", text: "baixa" };
    }
    if (score > 30 && score <= 60) {
      return { color: "header-two", text: "média" };
    } else {
      return { color: "header-three", text: "alta" };
    }
  };
  const { color, text } = handleScore(score);

  const newScore = score < 100 ? score : 100;

  return (
    <>
      <div className="wrapper">
        <div className={`profile-header ${color}`}>
          <div className="profile-image">
            <img src={`assets/users/${avatar}.jpeg`} alt="profile card" />
          </div>
          <div className="profile-header__name">{name}</div>
        </div>

        <div className="profile-card cardZIndex">
          <div className="profile-card__container">
            <h1>{newScore}</h1>
            <h4>{`Sua pontuação é ${text}`}</h4>
          </div>
          <button className="containerButton">
            Saiba mais
            <KeyboardArrowUpOutlinedIcon />
          </button>
          <div className="profile-card__grid">
            <span>0 a 30</span>
            <span>31 a 60</span>
            <span>61 a 100</span>
            <span className="grid-item level-one"></span>
            <span className="grid-item level-two"></span>
            <span className="grid-item level-three"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
