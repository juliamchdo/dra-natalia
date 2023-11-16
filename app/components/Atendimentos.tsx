'use client'

import React, {useEffect, useRef, useState} from 'react'
import {Transition} from '@headlessui/react'
import {RiHomeOfficeLine} from 'react-icons/ri'
import {TbHomeHeart} from 'react-icons/tb'
import {FaRegHospital, FaWhatsapp} from "react-icons/fa";

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

            <div className="absolute inset-0 bg-yellow-100 pointer-events-none" aria-hidden="true"/>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:pt-20 flex flex-col items-center">

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2">Agende a sua consulta</h1>

                    </div>

                    <div className="md:gap-6 flex flex-col md:flex-row">
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="m-8 text-center">
                                <h3>Atendimento online</h3>
                            </div>

                            <ul>
                                <li>Conveniência: Consultas virtuais no conforto do seu lar</li>
                                <li>Acesso fácil: Sem deslocamentos ou espera em consultórios</li>
                                <li>Confidencialidade: Consultas seguras e privadas</li>
                                <li>Flexibilidade: Horários disponíveis que se ajustam à sua agenda</li>
                                <li>Atendimento personalizado: Cuidado médico adaptado às suas necessidades</li>
                            </ul>
                        </div>

                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="m-8 text-center">
                                <h3>Atendimento Presencial</h3>
                            </div>

                            <ul>
                                <li>Atendimento humanizado: Cuidado médico com empatia e atenção</li>
                                <li>Diagnóstico preciso: Exames e avaliações detalhadas</li>
                                <li>Tratamento personalizado: Abordagem médica individualizada</li>
                                <li>Confiança e segurança: Acompanhamento presencial com uma profissional experiente</li>
                            </ul>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}