import Image from "next/image";
import React from "react";
import Button from "../Buttons";
import { NavbarText } from "../Typography";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-backgroundPrimary pt-14 ">
      <div className="container">
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
                  <NavbarText>Beranda</NavbarText>
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <NavbarText>Profile</NavbarText>
                </a>
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
                <a>
                  <NavbarText>Berita</NavbarText>
                </a>
              </li>
            </ul>
          </div>
          <div className="du-navbar-end">
            <Link href={"/contact"}>
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
