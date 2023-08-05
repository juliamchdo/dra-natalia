'use client'

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'

export default function Header() {

    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 bg-white">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Logo/>

                    <nav className="hidden md:flex md:grow">
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <Link href="/inicio"
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Início</Link>
                            </li>
                            <li>
                                <Link href="/atendimento"
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Atendimentos</Link>
                            </li>
                            <li>
                                <Link href="/sobre"
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sobre</Link>
                            </li>
                            <li>
                                <Link href="/contatos"
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contatos</Link>
                            </li>
                        </ul>
                    </nav>
                    <MobileMenu/>
                </div>
            </div>
        </header>
    )
}
