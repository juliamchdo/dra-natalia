'use client'

import Logo from './logo'
import MobileMenu from './mobile-menu'

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
            <div className="max-w-6xl mx-auto px-5 sm:px-6 bg-white mb-1">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Logo/>

                    <nav className="hidden md:flex md:grow">
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <span onClick={() => handleClickScroll('hero')}
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Início</span>
                            </li>
                            <li>
                                <span onClick={() => handleClickScroll('features')}
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Atendimentos</span>
                            </li>
                            <li>
                                <span onClick={() => handleClickScroll('experience')}
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sobre</span>
                            </li>
                            <li>
                                <span onClick={() => handleClickScroll('contact')}
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contatos</span>
                            </li>
                        </ul>
                    </nav>
                    <MobileMenu/>
                </div>
            </div>
        </header>
    )
}
