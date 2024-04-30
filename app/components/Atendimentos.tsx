'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaComputer } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function Atendimentos() {

  const [tab, setTab] = useState<number>(1)
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
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2">Agende a sua consulta</h1>
          </div>
          <div className="md:gap-6 flex flex-col md:flex-row">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="m-8 text-center">
                <h4 className="h4 text-yellow-200">Atendimento online</h4>
              </div>
              <ul>

                <li className="mb-4 text-xl"><span
                  className="font-semibold">Conveniência:</span> Consultas virtuais no conforto do seu
                  lar
                </li>
                <li className="mb-4 text-xl"><span className="font-semibold">Acesso fácil:</span> Sem
                  deslocamentos ou espera em consultórios
                </li>
                <li className="mb-4 text-xl"><span
                  className="font-semibold">Confidencialidade:</span> Consultas seguras e privadas
                </li>
                <li className="mb-4 text-xl"><span
                  className="font-semibold">Flexibilidade:</span> Horários disponíveis que se ajustam
                  à sua agenda
                </li>
                <li className="mb-4 text-xl"><span
                  className="font-semibold">Atendimento personalizado:</span> Cuidado médico adaptado
                  às suas necessidades
                </li>
              </ul>
              <div className="flex justify-center">
                <FaComputer size={50} color="#C6A264" />
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="m-8 text-center">
                <h4 className="h4 text-yellow-200">Atendimento Presencial</h4>
              </div>
              <ul>
                <li className="mb-4 text-xl"><span
                  className="font-semibold">Atendimento humanizado:</span> Cuidado médico com empatia
                  e atenção
                </li>
                <li className="mb-4 text-xl"><span
                  className="font-semibold">Diagnóstico preciso:</span> Exames e avaliações detalhadas
                </li>
                <li className="mb-4 text-xl"><span
                  className="font-semibold">Tratamento personalizado</span> Abordagem médica
                  individualizada
                </li>
                <li className="mb-4 text-xl"><span
                  className="font-semibold">Confiança e segurança:</span> Acompanhamento presencial
                  com uma profissional experiente
                </li>
              </ul>
              <div className="flex justify-center">
                <FaHome size={50} color="#C6A264" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}