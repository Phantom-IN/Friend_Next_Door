import React from "react";
import FaqSection from "./faq";

export const About = () => {
  return (
    <div className="about-container">
      <h2 className="first-heading">About Us</h2>
      <p className="aboutdes">
        Welcome to FriendNextDoor, a haven for mental and emotional support. Our
        website offers a confidential space where you can connect with our
        compassionate AI friends. These specially designed companions are here
        to listen, understand, and provide non-judgmental support. We aim to
        bridge the gap and create a caring community, empowering you to face
        life's challenges with strength and resilience. Join us on this journey
        towards a brighter and healthier tomorrow, one AI friend at a time.
        Together, let's foster a more compassionate society. FriendNextDoor -
        your friendly space for understanding and support.
      </p>
      <section id="faq-section">
        <FaqSection />
      </section>
    </div>
  );
};
