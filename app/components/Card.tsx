import "../../public/images/diabetes.jpg"
interface CardProps {
    photo: string,
    text: string
}
export function Card({photo, text} : CardProps){

    const style = {
        backgroundImage: `url(public/images/${photo}.jpg)`
    }

    return(
        <div className="card" style={style}>
            <h4>{text}</h4>
        </div>
    )
}
