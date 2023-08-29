import Image from "next/image";
import React from "react";
import Button from "../Buttons";

function Navbar() {
  return (
    <div className="bg-backgroundPrimary pt-14">
      <div className="du-navbar px-[80px] mx-auto">
        <div className="du-navbar-start">
          <a className="du-btn du-btn-ghost text-xl uppercase text-primary">
            Galideo
          </a>
        </div>
        <div className="du-navbar-center hidden lg:flex">
          <ul className="du-menu du-menu-horizontal px-1 text-black text-lg">
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Bootcamp</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Peminatan</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Berita</a>
            </li>
          </ul>
        </div>
        <div className="du-navbar-end">
          <Button buttonType="primary" className="ml-2 text-white" size="md">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
