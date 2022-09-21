





import React from 'react'

const Home = () => {
  return (
   <>
   
   <section className="home" id="home">
      <div className="home-content">
        <div className="text">
          <div className="text-one">Hello,my name is</div>
          <div className="text-two">Pooja Dhuri</div>
          <div className="text-three">I'm a <span style={{color:"#9b1750"}}>Frontend Developer</span> </div>
          <div className="button">
                <button>
                  <a href="https://drive.google.com/file/d/1TtVYdvN3l8wlD29vUPdOqTFkwn-lLtNC/view?usp=sharing" target="_blank">
                    Download CV
                  </a>
                </button>
              </div>
        </div>
        <div className='homeImg'>
          <img src='pooja.png'className='homeImg'/>
        </div>
      </div>
    </section>
   
   </>

  )
}

export default Home
