import "@/app/style/card.scss";
import Diabetes from "@/public/images/diabetes.jpg"
import Obesidade from "@/public/images/obesidade.jpg"
import Osteoporose from "@/public/images/osteoporose.jpg"
import Tireoide from "@/public/images/tireoide.jpg"
import Menopausa from "@/public/images/menopausa.jpg"
import Andropausa from "@/public/images/andropausa.jpg"
import Transicao from "@/public/images/transicao.jpg"
import Renal from "@/public/images/renal.jpg"
import Geral from "@/public/images/geral.jpg"
import Image from "next/image";

export function Card() {

    const images = [
        {
            id: 'photo-1',
            title: 'Diabetes',
            text: 'Atendimento de pessoas com diabetes, ajuste de doses de insulinas e rastreio de complicações micro e macrovasculares',
            photo: Diabetes
        },
        {
            id: 'photo-2',
            title: 'Obesidade',
            text: 'Emagrecimento com saúde, visando mudanças de hábitos e planos de tratamentos inovadores',
            photo: Obesidade
        },
        {
            id: 'photo-3',
            title: 'Osteoporose e Distúrbios Ósseos',
            text: 'Doenças em que ocorrem perda de massa óssea e risco de fraturas, e necessitam de tratamento e dieta adequados',
            photo: Osteoporose
        },
        {
            id: 'photo-4',
            title: 'Distúrbios da Tireóide',
            text: 'Tratamento de nódulos tireoidianos, hipertireoidismo, hipotireoidismo, Tireoidite de Hashimoto e Doença de Graves',
            photo: Tireoide
        },
        {
            id: 'photo-5',
            title: 'Menopausa e Climatério',
            text: 'Reposição hormonal para mulheres que sentem os sinais e sintomas da menopausa: ondas de calor, secura vaginal, baixa libido, transpiração, tonturas, etc',
            photo: Menopausa
        },
        {
            id: 'photo-6',
            title: 'Andropausa',
            text: 'Reposição hormonal masculina quando ocorre queda na produção dos hormônios androgênicos',
            photo: Andropausa
        },
        {
            id: 'photo-7',
            title: 'Doenças da Hipófise e Adrenais',
            text: 'Tumores hipofisários que podem produzir hormônios ou não. Tratamento da acromegalia, doença de cushing e prolactinomas',
            photo: Renal
        },
        {
            id: 'photo-8',
            title: 'Reposição Hormonal em Transgêneros',
            text: 'Terapia de reposição hormonal para modificações corpóreas',
            photo: Transicao
        },
        {
            id: 'photo-9',
            title: 'Clínica geral',
            text: 'Especialista em clínica geral, cuidando de uma ampla variedade de condições de saúde',
            photo: Geral
        }
    ]

    return (
        <>
            {
                images.map(image => {
                    return (
                        <div className="card">
                            <div>
                                <Image className="rounded" width={400} height={150} src={image.photo}  alt={image.title}/>
                            </div>

                            <div className="card-content">
                                <h3 className="card-title">{image.title}</h3>
                                <p className="card-text">{image.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
