import React from "react";

function Footer() {
  return (
    <div className="bg-backgroundPrimary">
      <footer className="du-footer md:container container-mobile text-base-content  flex justify-between py-[40px]">
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
        {/* <div>
        <span className="du-footer-title text-black">Bootcamp</span>
        <a className="du-link du-link-hover">Branding</a>
        <a className="du-link du-link-hover">Design</a>
        <a className="du-link du-link-hover">Marketing</a>
        <a className="du-link du-link-hover">Advertisement</a>
      </div> */}
        <div className="flex md:space-x-20 md:flex-row flex-col">
          <div className="flex flex-col space-y-1">
            <span className="du-footer-title text-black">Web Design</span>
            <a className="du-link du-link-hover">User Interface Designer</a>
            <a className="du-link du-link-hover">User Experience Designer</a>
            <a className="du-link du-link-hover">User Experience Researcher</a>
            <a className="du-link du-link-hover">User Experience Writer</a>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="du-footer-title text-black">Web & Mobile Dev</span>
            <a className="du-link du-link-hover">Frontend Dev</a>
            <a className="du-link du-link-hover">Backend Dev</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
