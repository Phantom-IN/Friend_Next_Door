import React from "react";
import girlAvatar from "../assets/img/avatar/girl-final.png";
import boyAvatar from "../assets/img/avatar/boy-final.png";
import grandmaAvatar from "../assets/img/avatar/grandma-final.png";
import uncleAvatar from "../assets/img/avatar/uncle-final.png";
import doctorAvatar from "../assets/img/avatar/doctor-final.png";
import "./pick-avatar.css";

const Pick = () => {
  return (
    <div className="main-pick-div">
      <h1>Pick Your Avatar!</h1>
      <h6>
        Choose from a diverse range of avatars, each with unique personalities
        and backgrounds, to find a comforting and relatable companion on your
        journey of understanding and growth.
      </h6>
      <div className="all-avatar">
        <div className="avatar-iii">
          <a
            href="http://localhost:8000/doctorAvatar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={doctorAvatar} alt="Dr.Sarah Thompson" />
          </a>
          <div className="caption">
            Dr. Sarah Thompson
            <p>Dr. Sage</p>
          </div>
        </div>
        <div className="avatar-iii">
          <a
            href="http://localhost:8000/boyAvatar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={boyAvatar} alt="Max" />
          </a>
          <div className="caption">
            Max
            <p>Your best buddy</p>
          </div>
        </div>
        <div className="avatar-iii">
          <a
            href="http://localhost:8000/girlAvatar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={girlAvatar} alt="Alexar" />
          </a>
          <div className="caption">
            Alexa
            <p>Your biggest supporter</p>
          </div>
        </div>
        <div className="avatar-iii">
          <a
            href="http://localhost:8000/manAvatar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={uncleAvatar} alt="David" />
          </a>
          <div className="caption">
            David
            <p>Your favourite colleague</p>
          </div>
        </div>
        <div className="avatar-iii">
          <a
            href="http://localhost:8000/grandmaAvatar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={grandmaAvatar} alt="Grandma Avatar" />
          </a>
          <div className="caption">
            Helen
            <p>Guardian Grandma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
