import Image from "next/image";
import React from "react";
import Button from "../Buttons";
import { NavbarText } from "../Typography";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-backgroundPrimary pt-14 ">
      <div className="md:container container-mobile">
        <div className="du-navbar">
          <div className="du-navbar-start">
            <a className="du-btn du-btn-ghost text-xl uppercase text-primary">
              Galideo
            </a>
          </div>
          <div className="du-navbar-center hidden lg:flex">
            <ul className="du-menu du-menu-horizontal px-1 text-black text-xl ">
              <li>
                <a>
                <Link href={"/"}>

                  <NavbarText>Beranda</NavbarText>
                </Link>
                </a>
              </li>
              <li>
                <Link href={"/profile"}>
                  {" "}
                  <NavbarText>Profile</NavbarText>
                </Link>
              </li>
              <li>
                <Link href={"/porfolio"}>
                  {" "}
                  <NavbarText>Porfolio</NavbarText>
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>
                    <NavbarText>Layanan</NavbarText>
                  </summary>
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
                <Link href={"/news"}>
                  {" "}
                  <NavbarText>Berita</NavbarText>
                </Link>
              </li>
            </ul>
          </div>
          <div className="du-navbar-end">
            <div className="du-dropdown du-dropdown-end">
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
                className="du-menu du-menu-compact du-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
<li>
                <a>
                <Link href={"/"}>

                  <NavbarText>Beranda</NavbarText>
                </Link>
                </a>
              </li>
              <li>
                <Link href={"/profile"}>
                  {" "}
                  <NavbarText>Profile</NavbarText>
                </Link>
              </li>
              <li>
                <Link href={"/porfolio"}>
                  {" "}
                  <NavbarText>Porfolio</NavbarText>
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>
                    <NavbarText>Layanan</NavbarText>
                  </summary>
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
                <Link href={"/news"}>
                  {" "}
                  <NavbarText>Berita</NavbarText>
                </Link>
              </li>
                <li>
                  <Link href={"/contact"}>
                    <Button
                      buttonType="primary"
                      className="ml-2 text-white"
                      size="md"
                    >
                      Hubungi Kami
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
            <Link href={"/contact"} className="lg:flex hidden">
              <Button
                buttonType="primary"
                className="ml-2 text-white"
                size="md"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
