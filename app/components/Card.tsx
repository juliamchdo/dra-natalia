import "@/app/style/card.scss";

export function Card() {

    const images = [
        {
            id: 'photo-1',
            title: 'Diabetes',
            text: 'Atendimento de pessoas com diabetes, ajuste de doses de insulinas e rastreio de complicações micro e macrovasculares'
        },
        {
            id: 'photo-2',
            title: 'Obesidade',
            text: 'Emagrecimento com saúde, visando mudanças de hábitos e planos de tratamentos inovadores'
        },
        {
            id: 'photo-3',
            title: 'Osteoporose e Distúrbios Ósseos',
            text: 'Doenças em que ocorrem perda de massa óssea e risco de fraturas, e necessitam de tratamento e dieta adequados'
        },
        {
            id: 'photo-4',
            title: 'Distúrbios da Tireóide',
            text: 'Tratamento de nódulos tireoidianos, hipertireoidismo, hipotireoidismo, Tireoidite de Hashimoto e Doença de Graves'
        },
        {
            id: 'photo-5',
            title: 'Menopausa e Climatério',
            text: 'Reposição hormonal para mulheres que sentem os sinais e sintomas da menopausa: ondas de calor, secura vaginal, baixa libido, transpiração, tonturas, palpitações, suores noturnos prejudicando o sono; depressão ou irritabilidade'
        },
        {
            id: 'photo-6',
            title: 'Andropausa',
            text: 'Reposição hormonal masculina quando ocorre queda na produção dos hormônios androgênicos'
        },
        {
            id: 'photo-7',
            title: 'Doenças da Hipófise e Adrenais',
            text: 'Tumores hipofisários que podem produzir hormônios ou não. Tratamento da acromegalia, doença de cushing e prolactinomas.'
        },
        {
            id: 'photo-8',
            title: 'Reposição Hormonal em Transgêneros',
            text: 'Terapia de reposição hormonal para modificações corpóreas'
        },
    ]

    return (
        images.map(image => {
            return (
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front flex justify-center items-center">
                            <h2 className="card-title z-50">{image.title}</h2>
                            <div className={"card-photo " + image.id}></div>
                        </div>

                        <div className="card-back px-3 flex justify-center items-center">
                            <h3 className="card-text">{image.text}</h3>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
