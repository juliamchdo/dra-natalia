'use client'

import React, { useState } from 'react'
import {FaWhatsapp} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
          <div className="bg-slate-400 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <a href="https://wa.me/1XXXXXXXXXX?text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta%20online"
               className="flex items-center justify-center">
              <FaWhatsapp className="text-xl text-green-500 pr-2"/>
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