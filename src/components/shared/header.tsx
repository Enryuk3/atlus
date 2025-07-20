'use client';

import Container from "./container";
import Logo from "./logo";
import MainMenu from "./main-menu";
import MenuMobile from "./menu-mobile";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="fixed left-0 top-0 w-full p-5 z-40 bg-black">
        <Container className="flex items-center justify-between">
          <section>
            <Logo />
          </section>
          <section className="hidden lg:block">
            <MainMenu />
          </section>
          <section className="lg:hidden">
            <button type="button" className="text-white" onClick={() => setShowMenu(true)}>
              <RiMenu3Line />
            </button>
          </section>
        </Container>
      </header>
      <MenuMobile isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
}

export default Header;
