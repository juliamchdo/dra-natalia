'use client'

import React, { useState } from 'react'

import {AiOutlineClose} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa";

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-8 right-12 w-auto z-60">
          <div className="text-slate-50 md:text-2xl text-xl md:p-5 p-2.5 bg-green-500 rounded shadow-lg flex justify-between">
            <a href="https://api.whatsapp.com/send?phone=5548999114373" target="_blank"
               className="flex items-center justify-center">
              <FaWhatsapp className="text-3xl text-white pr-2"/>
              Agende sua consulta
            </a>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <AiOutlineClose className="w-4 h-4 shrink-0 fill-current"/>
            </button>
          </div>
        </div>
      )}
    </>
  )
}