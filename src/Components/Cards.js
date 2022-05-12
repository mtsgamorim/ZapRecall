function Card(props){
    return (
        <div className="cardFront">
            <span>Pergunta {props.pergunta}</span>
            <ion-icon name="play-outline"></ion-icon>
        </div>  
    )
}



export default function Cards(){
    const cards = [
        {
            pergunta: "1"
        },
        {
            pergunta: "2"
        },
        {
            pergunta: "3"
        },
        {
            pergunta: "4"
        },
        {
            pergunta: "5"
        },
        {
            pergunta: "6"
        },
        {
            pergunta: "7"
        },
        {
            pergunta: "8"
        },
    ]


    return (
        <>
           {cards.map((card, index) => <Card key={index} pergunta={card.pergunta}/>)}
        </>
    )
}