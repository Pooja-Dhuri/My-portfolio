import React from "react";

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="content">
          <div className="title">
            <span>My Skills</span>
          </div>
          <div className="skills-details">
            <div className="boxes">
              <div className="box">
                <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="" className="iconimg" /></div>
                <div className="topic">HTML</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
              <div className="box">
              <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="" className="iconimg"/></div>
                <div className="topic">CSS</div>
                {/* <!-- <div className="per">80%</div> --> */}
              </div>
              <div className="box">
              <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt=""className="iconimg" /></div>
                <div className="topic">JavScript</div>
                {/* <!-- <div className="per">70%</div> --> */}
              </div>
              <div className="box">
              <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="" className="iconimg"/></div>
                <div className="topic">React-Js</div>
                {/* <!-- <div className="per">65%</div> --> */}
              </div>
              <div className="box">
              <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt="" className="iconimg"/></div>
                <div className="topic">Redux</div>
                {/* <!-- <div className="per">60%</div> --> */}
              </div>
              <div className="box">
                <div><img src="git.png" alt="" className="iconimg"/></div>
                <div className="topic">Git</div>
              </div>
              <div className="box">
                <div><img src="chakra1.jfif" alt=""className="iconimg" /></div>
                <div className="topic">Chakra-UI</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
              <div className="box">
              <div><img src="node.png" alt="" className="iconimg" /></div>
                <div className="topic">Node-Js</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
              <div className="box">
              <div><img src="express.png" alt="" className="iconimg" /></div>
                <div className="topic">Express-Js</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
              <div className="box">
              <div><img src="mongodb.jpeg" alt="" className="iconimg" /></div>
                <div className="topic">Mongo-DB</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
              <div className="box">
              <div><img src="tailwind1.jpeg" alt="" className="iconimg" /></div>
                <div className="topic">Tailwind</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
