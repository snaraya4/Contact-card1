import React from "react"
import mailImage from "./images/mail.png"
import linkedInImage from "./images/linkedin.png"
import githubImage from "./images/github.png"
import myImage from "./images/icons8-female-user-1500.png"


function App() {
  return (
    <div className="App">
      <div className="contact-card">
        <img src={myImage} />
        <h3>Sravya Narayana</h3>
        <div className="group">
          <div className="info-group">
            <img src={linkedInImage} />
            <a href="http://www.linkedin.com/in/sravya-narayana" target="_blank">linkedin.com/in/sravya-narayana</a>
          </div>
          <div className="info-group">
            <img src={mailImage}/>
            <p>snaraya4@binghamton.edu</p>
          </div>
          <div className="info-group">
            <img src={githubImage}/>
            <a href="https://github.com/snaraya4" target="_blank">github.com/snaraya4</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
