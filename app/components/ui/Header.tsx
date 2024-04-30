'use client'

import Logo from './logo'
import MobileMenu from './mobile-menu'
import "@/app/style/additional-styles/header.scss"

export default function Header() {
  const handleClickScroll = (elementID: string) => {
    const element = document.getElementById(elementID);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out h-2`}>
      <div className="header">
        <div className="flex items-center justify-between h-16 md:h-20">
          <nav className="hidden md:flex md:grow">
            <div className="logo">
              <Logo />
            </div>
            <ul className="flex grow justify-end items-center">
              <li>
                <span onClick={() => handleClickScroll('hero')}
                  className="menu-items font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">Início</span>
              </li>
              <li>
                <span onClick={() => handleClickScroll('features')}
                  className="menu-items font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">Atendimentos</span>
              </li>
              <li>
                <span onClick={() => handleClickScroll('especialidades')}
                  className="menu-items font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">Especialidades</span>
              </li>
              <li>
                <span onClick={() => handleClickScroll('contact')}
                  className="menu-items font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">Contatos</span>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
