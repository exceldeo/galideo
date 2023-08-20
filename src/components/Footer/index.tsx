import React from "react";

function Footer() {
  return (
    <footer className="du-footer p-10 text-base-content">
      <div>
        <span className="text-xl uppercase text-primary">Galideo</span>
        <p>
          Galideo Digital Indonesia
          <br />
          Jalan Bumi Cikeneng Indah Blok K no 20
          <br />
          Bandung, Indonesia
          <br />
          support@galideo.com
          <br />© {new Date().getFullYear()} Galideo Digital Indonesia
        </p>
      </div>
      <div>
        <span className="du-footer-title text-black">Bootcamp</span>
        <a className="du-link du-link-hover">Branding</a>
        <a className="du-link du-link-hover">Design</a>
        <a className="du-link du-link-hover">Marketing</a>
        <a className="du-link du-link-hover">Advertisement</a>
      </div>
      <div>
        <span className="du-footer-title text-black">Web Design</span>
        <a className="du-link du-link-hover">About us</a>
        <a className="du-link du-link-hover">Contact</a>
        <a className="du-link du-link-hover">Jobs</a>
        <a className="du-link du-link-hover">Press kit</a>
      </div>
      <div>
        <span className="du-footer-title text-black">Web & Mobile Dev</span>
        <a className="du-link du-link-hover">Terms of use</a>
        <a className="du-link du-link-hover">Privacy policy</a>
        <a className="du-link du-link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}

export default Footer;
