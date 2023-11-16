import {FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import Logo from "@/public/images/logo.svg"
import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="relative" id="contact">
            <div className="absolute inset-0 bg-gray-100 pointer-events-none" aria-hidden="true"/>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-around py-12 md:py-20">

                    <Image src={Logo} alt="Logo" width={400} height={200} />

                    <div className="max-w-sm md:max-w-1xl grid grid-cols-2 md:grid-cols-2">

                        <div className="flex items-center justify-center py-2 md:col-auto">
                            <a href="https://www.linkedin.com/in/natalia-bittencourt-da-silva-007594185/" target="_blank">
                                <FaLinkedin className="max-w-full fill-current text-blue-700 text-4xl"/>
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-1 py-2 md:col-auto">
                            <a href="https://wa.me/1XXXXXXXXXX?text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
                                <FaWhatsapp className="max-w-full fill-current text-green-600 text-4xl"/>
                            </a>
                            <p>(48) 9911-4373</p>
                        </div>
                    </div>

                    {/*<div className="max-w-3xl mx-auto mt-20">*/}
                    {/*    <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">*/}

                    {/*        <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">*/}
                    {/*            <blockquote className="text-xl font-medium mb-4">*/}
                    {/*                Guiando jornadas de bem-estar: combinando medicina e nutrição para inspirar uma vida saudável e equilibrada.*/}
                    {/*            </blockquote>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        </section>
    )
}