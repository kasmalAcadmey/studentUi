import React from "react";
import { BsBook } from "react-icons/bs";
function Ruslt() {
  return (
    <div className="result">
      <img src="/MU logo.png" className="logo-image" />
      <span className="logo-name">Kamal University</span>
      <div className="student">
        <div className="left">
          <div className="user">
            <img
              src="https://humanrights.ca/sites/prod/files/styles/crop%5Bwidth%5D%3D768%26crop%5Bheight%5D%3D432%26crop%5Bfp%5D%3D0.46%2C0.36%26crop%5Bmask%5D%5Btype%5D%3Dbottom%26crop%5Bmask%5D%5Bamount%5D%3D0.2%26convert%5Bextension%5D%3Djpeg/public/2022-10/The-Right-to-Choose-event-photo-2.png?itok=ly4r5fG1"
              alt=""
              className="image_user"
            />
            <span>Fatima mohamed Abdi</span>
            <hr />
            <div className="info">
              <div className="item">
                <span className="fast">Student </span>
                <span>ID:2711</span>
              </div>
              <div className="item">
                <span className="fast">Faculty:</span>
                <span>Arts And Humanaties</span>
              </div>
              <div className="item">
                <span className="fast"> Department:</span>
                <span>ARABIC LITERATURE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="genral">
            <div className="main">
              <BsBook style={{fontSize: 22}}/>
              <span className="name">General Information</span>
              </div>
       
              <div className="items">
                <div className="one">
                  <span className="fast">ID:</span>
                  <span>2711</span>
                </div>
                <div className="one">
                  <span className="fast">Academic Year:</span>
                  <span>2016-2021</span>
                </div>
                <div className="one">
                  <span className="fast">Gender:</span>
                  <span>F</span>
                </div>
                <div className="one">
                  <span className="fast">Prenctage:</span>
                  <span>80%</span>
                </div>
                <div className="one">
                  <span className="fat">Garde:</span>
                  <span>B</span>
                </div>
                <div className="one">
                  <span className="fast">Religion:</span>
                  <span>Muslim</span>
                </div>
              </div>
           
          </div>
          <div className="statement">
            <div className="main">
              <BsBook style={{fontSize: 22}} />
              <span className='name'>Appreciation Statements</span>
            </div>
            <span className="desc">
              <span style={{fontSize: 22 , color: 'royalblue'}}>Mogadishu University </span>Congratulates Student <span style={{fontSize: 22, color: 'royalblue'}}>Siham Hassan Mohamed
              Ahmed </span>, For the successful graduation on academic year: 2005-2009
              . She/He has been known since her/his joining to the University
              with courageous, polite, considerate, dynamic, reliable and
              friendly with other colleagues
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ruslt;
