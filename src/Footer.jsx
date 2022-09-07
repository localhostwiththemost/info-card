import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <footer>
          <div className="logo-container">
            <a
              className="twitter"
              href="https://twitter.com/bloomitdev"
              target="_blank"
              rel="noopener"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a
              className="discord"
              href="https://discordapp.com/users/lil_sidious#0957"
              target="_blank"
              rel="noopener"
            >
              <ion-icon name="logo-discord"></ion-icon>
            </a>
            <a
              className="github"
              href="https://github.com/localhostwiththemost"
              target="_blank"
              rel="noopener"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
