import React from "react";

function Info() {
  return (
    <>
      <div className="info-container">
        <div className="crop">
          <img src="./img/me-min.webp" />
        </div>
        <div className="info">
          <h1>Joseph Powell</h1>
          <h2>Frontend Developer</h2>
          <a href="https://developerjoe.io/" target="_blank" rel="noopener">
            <p>developerjoe.io</p>
          </a>
          <a href="mailto:jpowelldev@gmail.com" target="_blank" rel="noopener">
            <button>
              <ion-icon name="mail" className="mail-icon"></ion-icon>

              <span>Email</span>
            </button>
          </a>

          <a
            href="https://linkedin.com/in/joseph-powell-034674245"
            target="_blank"
            rel="noopener"
          >
            <button className="btn__linkedin">
              <ion-icon name="logo-linkedin"></ion-icon>
              <span>LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Info;
