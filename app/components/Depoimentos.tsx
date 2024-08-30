/* eslint-disable react/jsx-key */
"use client"

import "@/app/style/carousel.scss"

import { useEffect, useState } from "react";

import { Transition } from "@headlessui/react";

export function Depoimentos() {

  const INTERVAL_LENGTH = 10000;
  const AUTOPLAY = true;

  const messages = [
    {
      text: 'Uma médica muito zelosa, transborda no olhar o brilho pela profissão e cuidados com o próximo.',
      author: 'Jaqueline'
    },
    {
      text: 'Muito satisfeita com o trabalho da Dra. Natália que leva em conta a individualidade de cada paciente. Não existe certo e errado e sim aquilo que funciona pra cada um.',
      author: 'Júlia'
    },
    {
      text: 'A Dra. Natália é uma endocrinologista excepcional! Seu atendimento vai além da simples consulta, transmitindo segurança, empatia e conhecimento!',
      author: 'Guilherme'
    },
    {
      text: 'Recomendo sem hesitação a Dra. Natália, pois encontrar uma profissional tão dedicada à saúde e bem-estar é realmente inspirador.',
      author: 'Rafael'
    },
  ];


  const [currentItem, setCurrentItem] = useState(0);
  const prev = () => setCurrentItem((curr) => (curr === 0 ? messages.length - 1 : curr - 1));
  const next = () => setCurrentItem((curr) => (curr === messages.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!AUTOPLAY) return;
    const interval = setInterval(next, INTERVAL_LENGTH);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="carousel relative h-[150px] w-full overflow-hidden flex items-center text-center">
      {messages.map((item, index) => (
        <Transition
          key={index}
          show={currentItem === index}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex items-center">
            <p className="absolute w-full carousel-text px-20">{'" ' + item.text + ' "'} - {item.author}</p>
          </div>
        </Transition>
      ))}
      <div className="absolute w-full h-full items-center flex justify-between">
        <button className="m-4 h-12 w-12 rounded-full bg-slate-200 text-2xl" onClick={prev}>
          {"<"}
        </button>
        <button className="m-4 h-12 w-12 rounded-full bg-slate-200 text-2xl" onClick={next}>
          {">"}
        </button>
      </div>
      <div className="absolute top-[125px] flex w-full justify-center gap-4">
        {messages.map((_, index) => (
          <div key={index} />
        ))}
      </div>
    </section>
  );
}