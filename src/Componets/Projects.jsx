import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      {/* <!-- My Services Section Start --> */}
      <section className="services" id="services">
        <div className="content">
          <div className="title">
            <span>My Projects</span>
          </div>
          {/* upper group */}
          <div className="boxes">
            {/* first project */}
            <div className="box">
              <div className="icon">
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className="imgs"
                  src="lumen.PNG"
                  alt=""
                />
              </div>
              <div className="topic">Lumen5</div>
              <div className="topicsum">
              <div className='paradiv'><p>
              Lumen5 combines powerful A.I. with a simple drag-and-drop interface to help you create professional video content in minutes. 
              </p></div>
              <p className="tech">Teck stack :</p><p className="techstack">
              React-Js | Redux | HTML5 | CSS3 | Javascript | Chakra-UI
              </p>
              </div>
              <div className="media-icons" id="linkss">
                <a href="https://github.com/Rahul850kr/Lumen5-Clone-Project"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a>
                <a href="https://lumen5-clone-project.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns"/>
                </a>
              </div>
            </div>
            
            {/* second project */}
            <div className="box" id="box">
              <div className="icon">
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className="imgs"
                  src="Skinstorepic.PNG"
                  alt=""
                />
              </div>
              <div className="topic">SkinStore.com</div>
              <div className="topicsum">
              <div className='paradiv'><p>
              This is a E-commerce Website where you can buy the beauty
              products like Skin-care,Beauty,Hare-care,Makeup Bath&Body
              etc. whole website clone using React.
              </p></div>
              <p className="tech">Teck stack :</p>
                <p className="techstack"> HTML5 | JavaScript | React-Js | CSS3 | Chakra-UI
              </p>
              </div>
              <div className="media-icons" id="linkss">
                <div><a href="https://github.com/Pooja-Dhuri/SkinStore.com"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a></div>
                <div>
                <a href="https://skin-store-clone.netlify.app"target="_blank"><AiOutlineGlobal id="btns"/>
                </a></div>
              </div>
            </div>
          </div>
      
      {/* below group */}
            <div className="boxes">
            {/* third project */}
            <div className="box">
              <div className="icon">
                <img className="imgs" src="shoppic.PNG" alt="" />
              </div>
              <div className="topic">Shop.com</div>
              <div className="topicsum">
              <div className='paradiv'><p>This is a clone of E-commerce website where we have men's products, women's product,cosmetics and children products. functionalities like login,filteration,addtocart etc.</p></div>
              <p className="tech">Teck stack :</p><p className="techstack"> HTML5 | CSS | JavaScript </p></div>
              <div className="media-icons" id="linkss">
                <a href="https://github.com/rameshmane7218/shop.com"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a>
                <a href="https://ephemeral-cactus-fa8c49.netlify.app/"target="_blank">
                <AiOutlineGlobal id="btns"/>
                </a>
              </div>
            </div>
          
              {/* forth project */}
              <div className="box">
              <div className="icon">
                <img className="imgs" src="portfolio.PNG" alt="" />
              </div>
              <div className="topic">My Portfolio</div>
              <div className="topicsum">
              <div className='paradiv'><p>This is My portfolio website where the information about me is mention over their. Skills,projects and the languages are mention.
             </p></div>
              <p className="tech">Teck stack :</p><p className="techstack"> HTML5 | JavaScript | React-Js | CSS3 | Chakra-UI </p>
              </div>
              <div className="media-icons" id="linkss">
                <a href="https://github.com/Pooja-Dhuri/My-portfolio" target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a>
                <a href="https://poojadhuriportfolio.vercel.app" target="_blank">
                <AiOutlineGlobal id="btns"/>
                </a>
              </div>
              </div>



            </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
