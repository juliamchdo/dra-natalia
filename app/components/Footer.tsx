import {FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import Logo from "@/public/images/logo.svg"
import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="relative" id="contact">
            <div className="absolute inset-0 bg-gray-100 pointer-events-none" aria-hidden="true"/>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-around flex-col py-12 md:flex-row md:py-20">

                    <Image src={Logo} alt="Logo" width={400} height={200} />

                    <div className="max-w-sm md:max-w-1xl grid grid-cols-2 md:grid-cols-2">

                        {/* <div className="flex items-center justify-center py-2 md:col-auto">
                            <a href="https://www.linkedin.com/in/natalia-bittencourt-da-silva-007594185/" target="_blank">
                                <FaLinkedin className="max-w-full fill-current text-blue-700 text-4xl"/>
                            </a>
                        </div> */}

                        <div className="flex items-center justify-center gap-1 py-2 md:col-auto">
                            <a href="https://api.whatsapp.com/send?phone=554899114373" target="_blank">
                                <FaWhatsapp className="social max-w-full fill-current text-yellow-200 text-4xl"/>
                            </a>
                            <p>(48) 9911-4373</p>
                        </div>

                        <div className="flex items-center justify-center gap-1 py-2 md:col-auto">
                            <a href="https://www.instagram.com/dranatalia.bittencourt/" target="_blank">
                                <FaInstagram className="social max-w-full fill-current text-yellow-200 text-4xl"/>
                            </a>
                            <p>dranatalia.bittencourt</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}