import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import React from "react";

export default function Footer() {
  return (
    <section className="relative" id="contact">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center justify-around flex-col py-12 md:flex-row md:py-20">
          <Image src={Logo} alt="Logo" width={400} height={200} />
          <div className="max-w-md md:max-w-1xl grid grid-cols-2 md:grid-cols-2">
            <div className="flex items-center justify-center gap-1 py-2 md:col-auto">
              <a
                href="https://api.whatsapp.com/send?phone=554899114373"
                target="_blank"
              >
                <FaWhatsapp className="social max-w-full fill-current text-yellow-200 text-4xl" />
              </a>
              <p className="text-lg">(48) 99911-4373</p>
            </div>
            <div className="flex items-center justify-center gap-1 py-2 md:col-auto">
              <a
                href="https://www.instagram.com/dranatalia.bittencourt/"
                target="_blank"
              >
                <FaInstagram className="social max-w-full fill-current text-yellow-200 text-4xl" />
              </a>
              <p className="text-xl">dranatalia.bittencourt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
