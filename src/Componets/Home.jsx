
import FileSaver from 'file-saver';
import html2pdf from 'html2pdf.js';
import React from 'react'

const Home = () => {
  // const onDownload = () => {
  //    // Replace "GOOGLE_DRIVE_LINK" with your own Google Drive link
  // const googleDriveLink = "https://drive.google.com/file/d/1jvc3LOU2iDfnaTIbRp5qDFG7VpjwbyPw/view?usp=sharing";

  // // Fetch the content of the Google Drive link as HTML
  // fetch(googleDriveLink)
  //   .then(response => response.text())
  //   .then(html => {
  //     // Convert the HTML content to a PDF
  //     const pdf = html2pdf.generatePdf(html);

  //     // Save the PDF and initiate the download
  //     FileSaver.saveAs(pdf, 'my_resume.pdf');
  //   });
  // };
  return (
   <>
   
   <section className="home" id="home">
      <div className="home-content">
        <div className="text">
          <div className="text-one">Hello,my name is</div>
          <div className="text-two">Pooja Dhuri</div>
          <div className="text-three">I'm a <span style={{color:"#9b1750"}}>Full-Stack Developer</span> </div>
          <div className="button">
                <button>
                <a href="https://drive.google.com/file/d/1R3rBdfJglNU_MXDDd7YmKepvUJQaCIGS/view?usp=sharing" target="_blank">
                  View Resume
                  </a>
                </button>
                {/* <button onClick={onDownload()}>
                    Download Resume
                </button> */}
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
