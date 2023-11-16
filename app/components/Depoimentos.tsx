"use client";

import {Carousel, Typography} from "@material-tailwind/react";
import "@/app/style/carousel.scss"
import React from "react";
import {ImQuotesLeft} from "react-icons/im";
import {ImQuotesRight} from "react-icons/im";

export function Depoimentos() {

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
    ]
    return (
        <div>

            <Carousel loop={false} autoplay={false}>

                {
                    messages.map((m, i) => {
                        return (
                            <div className="carousel w-full h-96 p-10" key={i}>
                                <div className="carousel-text-container">

                                    <Typography className="carousel-text" variant="lead" color="white">
                                        <ImQuotesLeft fill="white"/>
                                        {m.text}
                                        <ImQuotesRight fill="white"/>
                                    </Typography>

                                    <Typography variant="lead" color="white" className="carousel-author">
                                        {m.author}
                                    </Typography>

                                </div>
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>

    )
}