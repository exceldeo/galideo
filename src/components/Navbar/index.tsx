import Image from "next/image";
import React from "react";
import Button from "../Buttons";

function Navbar() {
  return (
    <div className="bg-gray-50 ">
      <div className="du-navbar px-[80px] mx-auto">
        <div className="du-navbar-start">
          <div className="du-dropdown">
            <label tabIndex={0} className="du-btn du-btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="du-menu du-menu-sm du-dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="du-btn du-btn-ghost text-xl uppercase text-primary">
            Galideo
          </a>
        </div>
        <div className="du-navbar-center hidden lg:flex">
          <ul className="du-menu du-menu-horizontal px-1 text-primary">
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
          <Button buttonType="primary" className="ml-2 text-white" size="sm">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
