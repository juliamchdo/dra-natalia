'use client'

import React, { useEffect, useRef, useState } from 'react'

import { FaComputer } from "react-icons/fa6";

export default function Atendimentos() {
  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative" id="features">
      <div className="absolute inset-0 bg-yellow-100 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-20 flex flex-col items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2">Agende a sua consulta online</h1>
          </div>
              <div className="flex justify-center pb-6">
                <FaComputer size={50} color="#C6A264" />
              </div>
          <div className="md:gap-6 flex flex-col">
            <div className="max-w-xl md:max-w-none flex flex-col md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <ul>
                <li className="mb-4 text-2xl"><span
                  className="font-semibold">Conveniência:</span> Consultas online no conforto do seu
                  lar
                </li>
                <li className="mb-4 text-2xl"><span className="font-semibold">Acesso fácil:</span> Sem
                  deslocamentos ou espera em consultórios
                </li>
                <li className="mb-4 text-2xl"><span
                  className="font-semibold">Confidencialidade:</span> Consultas seguras e privadas
                </li>
                <li className="mb-4 text-2xl"><span
                  className="font-semibold">Flexibilidade:</span> Horários disponíveis que se ajustam
                  à sua agenda
                </li>
                <li className="mb-4 text-2xl"><span
                  className="font-semibold">Atendimento personalizado:</span> Cuidado médico adaptado
                  às suas necessidades
                </li>
              </ul>
              <span className="text-center text-3xl font-bold mt-8">Cuido da sua saúde com amor e empatia!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}