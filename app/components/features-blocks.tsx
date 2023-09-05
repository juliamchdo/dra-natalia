import {LiaUniversitySolid} from "react-icons/lia";
import {PiGraduationCapDuotone} from 'react-icons/pi';
import {GiBookshelf} from 'react-icons/gi';
import React from "react";
import "@/app/style/additional-styles/card.scss"
import {Card} from "@components/Card";

export default function FeaturesBlocks() {
    let photo = 'diabetes'
    let text = 'Diabetes'
  return (
    <section className="relative" id="experience">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">


          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Experiência</h2>
            <p className="text-xl text-gray-600">Experiência que você pode confiar: Anos de prática profissional que garantem cuidados médicos de alta qualidade.</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Card photo={'diabetes'} text={'Diabtes'} />
            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <LiaUniversitySolid className="w-16 h-16 p-1 -mt-1 mb-2"/>

              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">UNESP - Universidade Estadual Paulista</h4>
              <p className="text-gray-600 text-center">Graduação em Medicina</p>
            </div>

            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <LiaUniversitySolid className="w-16 h-16 p-1 -mt-1 mb-2"/>

              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">Universidade Anhanguera</h4>
              <p className="text-gray-600 text-center">Graduação em Nutrição</p>
            </div>

            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <PiGraduationCapDuotone className="w-16 h-16 p-1 -mt-1 mb-2"/>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">UNIFESP - Universidade Federal de São Paulo</h4>
              <p className="text-gray-600 text-center">Especialização em saúde da família e comunidade</p>
            </div>

            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <PiGraduationCapDuotone className="w-16 h-16 p-1 -mt-1 mb-2"/>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">Faculdade Unyleya</h4>
              <p className="text-gray-600 text-center">Pós-graduação em medicina do tráfego</p>
            </div>

            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <PiGraduationCapDuotone className="w-16 h-16 p-1 -mt-1 mb-2"/>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">Sanar Residência Médica</h4>
              <p className="text-gray-600 text-center">Pós-graduação em endocrinologia</p>
            </div>

            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <PiGraduationCapDuotone className="w-16 h-16 p-1 -mt-1 mb-2"/>
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">IBCMED - Instituto Brasileiro de Ciências Médicas Juscelino Kubitschek Ltda</h4>
              <p className="text-gray-600 text-center">Pós-graduação em nutrologia</p>
            </div>

            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <GiBookshelf className="w-16 h-16 p-1 -mt-1 mb-2" />
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">Hospital Israelita Albert Einstein - São Paulo</h4>
              <p className="text-gray-600 text-center">ACLS - Advanced Cardiovascular Life Support</p>
            </div>

            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <GiBookshelf className="w-16 h-16 p-1 -mt-1 mb-2" />
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">Hospital Israelita Albert Einstein - São Paulo</h4>
              <p className="text-gray-600 text-center">PALS – Pediatric Advanced  Life Support</p>
            </div>

            <div className="card relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full justify-center">
              <GiBookshelf className="w-16 h-16 p-1 -mt-1 mb-2" />
              <h4 className="text-lg font-bold leading-snug tracking-tight mb-1 text-center">USP - Universidade de São Paulo</h4>
              <p className="text-gray-600 text-center">ATLS - Advanced Trauma Life Support</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}