'use client'

import React, {useEffect, useRef, useState} from 'react'
import {Transition} from '@headlessui/react'
import {RiHomeOfficeLine} from 'react-icons/ri'
import {TbHomeHeart} from 'react-icons/tb'
import {FaRegHospital, FaWhatsapp} from "react-icons/fa";
import Map from "@components/map";


export default function Features() {

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

            <div className="absolute inset-0 bg-gray-100 pointer-events-none" aria-hidden="true"/>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Atendimentos</h1>
                        <p className="text-xl text-gray-600">Oferecemos atendimentos online e presenciais, sempre
                            prontos para cuidar de você, onde quer que esteja.</p>
                    </div>

                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="mb-8 md:mb-0">
                                <a id="online-attendance"
                                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                   href="#0"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       setTab(1);
                                   }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Atendimento online
                                        </div>
                                        <div className="text-gray-600">Receba cuidados médicos de qualidade sem sair de
                                            casa.
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <RiHomeOfficeLine/>
                                    </div>
                                </a>
                                <a id="presencial-attendance"
                                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                   href="#0"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       setTab(2);
                                   }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Atendimento
                                            presencial
                                        </div>
                                        <div className="text-gray-600">Nosso atendimento presencial é realizado de forma
                                            acolhedora e dedicada, priorizando sua saúde e bem-estar.
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <TbHomeHeart/>
                                    </div>
                                </a>
                                <a id="attendance-places"
                                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                   href="#0"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       setTab(3);
                                   }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Locais de
                                            atendimento
                                        </div>
                                        <div className="text-gray-600">Realizo atendimentos em diversos hospitais e
                                            clínicas da região de Goiânia e Anápolis.
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <FaRegHospital/>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                            <div className="transition-all">
                                <div className="relative flex flex-col text-center lg:text-right" ref={tabs}>
                                    <Transition
                                        show={tab === 1}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div
                                            className={`flex text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white border-gray-200`}
                                        >
                                            <div>
                                                <div
                                                    className="font-bold mb-1">
                                                    <a href="https://wa.me/1XXXXXXXXXX?text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta%20online"
                                                       className="flex items-center justify-center">
                                                        <FaWhatsapp className="text-3xl text-green-500 pr-2"/>
                                                        Agende sua consulta online agora mesmo!
                                                    </a>

                                                </div>
                                                <ul className="list-disc p-2 text-gray-600 text-left">
                                                    <li>Conveniência: Consultas
                                                        virtuais no conforto do seu lar
                                                    </li>

                                                    <li>Acesso fácil: Sem
                                                        deslocamentos ou espera em consultórios
                                                    </li>

                                                    <li>Confidencialidade: Consultas
                                                        seguras e privadas
                                                    </li>

                                                    <li>Flexibilidade: Horários
                                                        disponíveis que se ajustam à sua agenda
                                                    </li>

                                                    <li>Atendimento personalizado:
                                                        Cuidado médico adaptado às suas
                                                        necessidades
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Transition>
                                    <Transition
                                        show={tab === 2}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div
                                            className={`flex text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white border-gray-200`}
                                        >
                                            <div>
                                                <div
                                                    className="font-bold mb-1">
                                                    <a href="https://wa.me/1XXXXXXXXXX?text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta%20presencial"
                                                       className="flex items-center justify-center">
                                                        <FaWhatsapp className="text-3xl text-green-500 pr-2"/>
                                                        Agende sua consulta presencial agora mesmo!
                                                    </a>

                                                </div>
                                                <ul className="list-disc p-2 text-gray-600 text-left">
                                                    <li>Atendimento humanizado: Cuidado médico com empatia e atenção
                                                    </li>

                                                    <li>Diagnóstico preciso: Exames e avaliações detalhadas
                                                    </li>

                                                    <li>Tratamento personalizado: Abordagem médica individualizada
                                                    </li>

                                                    <li>Confiança e segurança: Acompanhamento presencial com uma
                                                        profissional experiente
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Transition>
                                    <Transition
                                        show={tab === 3}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                            <Map></Map>
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}