import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import vaibhavpic from "../assets/img/vaibhav.jpeg";
import shivampic from "../assets/img/shivam.jpeg";
import aditipic from "../assets/img/aditi.jpeg";
import dhruvpic from "../assets/img/dhruv.jpeg";
import React from "react";

export const Team = () => {

  const handleMailAditi = () => {
    const predefinedEmail = 'aditigaikwad003@gmail.com';
    const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(predefinedEmail)}`;
    window.open(composeUrl);
  };

  const handleMailVaibhav = () => {
    const predefinedEmail = 'vaibhav.vanage@gmail.com';
    const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(predefinedEmail)}`;
    window.open(composeUrl);
  };

  const handleMailShivam = () => {
    const predefinedEmail = 'shivammusterya@gmail.com';
    const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(predefinedEmail)}`;
    window.open(composeUrl);
  };

  const handleMailDhruv = () => {
    const predefinedEmail = 'dhruvsheth226@gmail.com';
    const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(predefinedEmail)}`;
    window.open(composeUrl);
  };

  let message = `Meet the team behind FriendNextDoor.`;
  return (
    <section class="section-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="section-title">Team
            </h2>
            <h3 class="section-subtitle">{message}</h3>
            
          </div>
          <div class="col-sm-5 col-md-3">
            <div class="team-item">
              <img src={aditipic} class="team-img" alt="pic" />
              <h3>Aditi Gaikwad</h3>
              <div class="team-info">
                <p>Tech Enthusiast</p>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/aditig06/" target="_blank">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://github.com/uyaditi" target="_blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#">
                <img src={navIcon3} alt="Icon" onClick={handleMailAditi} target="_blank"/>
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-5 col-md-3">
            <div class="team-item">
              <img src={vaibhavpic} class="team-img" alt="pic" />
              <h3>Vaibhav Vanage</h3>
              <div class="team-info">
                <p>Cyber Geek</p>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/vaibhav-vanage/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://github.com/Phantom-IN" target="_blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#">
                <img src={navIcon3} alt="Icon" onClick={handleMailVaibhav} target="_blank"/>
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-5 col-md-3">
            <div class="team-item">
              <img src={shivampic} class="team-img" alt="pic" />
              <h3>Shivam Musterya</h3>
              <div class="team-info">
                <p>Tech Sage</p>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/shivam-musterya-30a101264/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://github.com/musteryasm" target="_blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="Icon" onClick={handleMailShivam} target="_blank"/>
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-5 col-md-3">
            <div class="team-item">
              <img src={dhruvpic} class="team-img" alt="pic" />
              <h3>Dhruv Sheth</h3>
              <div class="team-info">
                <p>Code Crafter</p>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/dhruvnet/" target="_blank">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://github.com/Dhruvnet" target="_blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#">
                <img src={navIcon3} alt="Icon" onClick={handleMailDhruv} target="_blank"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
