import React, { useState } from "react";
const About = () => {
  const [about, setAbout] = useState("");
  const [work, setWork] = useState("none");

  const handleAbout = () => {
    setWork("none");
    setAbout("block");
  };
  const handleWork = () => {
    setWork("block");
    setAbout("none");
  };
  return (
    <>
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>All About Me And My Work Experience</span>
          </div>
          <div className="abbutton">
            <button onClick={handleAbout}>About</button>
            <button onClick={handleWork}>Experience</button>
          </div>
          <div className="about-details">
            <div className="left">
              <img src="cartoon-developer.PNG" alt="" />
            </div>
            <div className="right">
              <div style={{ display: about }}>
                <div className="topic">
                  I like to code because it's a usable{" "}
                  <span style={{ color: "#9b1750" }}>ART</span>
                </div>
                <p>
                  Hello World! I'm passinate Full-Stack Developer based out of
                  Masai school’s intensive and immersive learning. Look forward
                  to joining a company where I will be able to explore My
                  skills. I love to combining the worlds of logic and creative
                  design to make eye-catching,accessible,and user-friendly
                  websites and applications.
                </p>
              </div>
              <div style={{ display: work, textAlign: "left" }}>
                <div style={{ fontWeight: 600, fontSize: "25px" }}>
                  <span style={{ color: "#de507a" }}>
                    Full-Stack Developer at Webure Technology
                  </span>
                </div>
                <div style={{ marginLeft: "350px", fontWeight: 600 }}>
                  <h2>Feb-2023 to May-2023</h2>
                </div>
                <div style={{ textAlign: "left" }}>
                  <h2 style={{ fontWeight: 600, fontSize: "25px" }}>
                    Role And Responsibilities
                  </h2>
                  <ul>
                    <li>
                      Designed collaborative projects like the billing App and
                      Danaos Tourism website.
                    </li>
                    <li>
                      started the project from the start and learned the backend
                      part and lots of other functionalities.
                    </li>
                    <li>Enhanced the application features and fix the bugs.</li>
                    <li>
                      Used tech-stack like react, redux, node, express Mongo
                      tailwind and Chakraui Collaborated with a team of 4
                      members.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
