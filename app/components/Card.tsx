import "@/app/style/card.scss";
export function Card(){

    const images = [
        {id: 'photo-1', frontText: 'Diabetes', backText: 'teste'},
        {id: 'photo-2', frontText: 'Obesidade', backText: 'teste'},
        {id: 'photo-3', frontText: 'Osteoporose e Distúrbios Ósseos', backText: 'teste'},
        {id: 'photo-4', frontText: 'Distúrbios da Tireóide', backText: 'teste'},
        {id: 'photo-5', frontText: 'Menopausa e Climatério', backText: 'teste'},
        {id: 'photo-6', frontText: 'Andropausa', backText: 'teste'},
        {id: 'photo-7', frontText: 'Doenças da Hipófise e Adrenais', backText: 'teste'},
        {id: 'photo-8', frontText: 'Reposição Hormonal em Transgêneros', backText: 'teste'},
    ]

    return(
        images.map(image => {
            return(
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front flex justify-center items-center">
                            <p className="card-text z-50">{image.frontText}</p>
                            <div className={"card-photo " + image.id}></div>
                        </div>

                        <div className="card-back flex justify-center items-center">
                            <p className="card-text z-50">{image.backText}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
