import React from "react";
function Card(props) {
  const [question, setQuestion] = React.useState(false);
  const [answer, setAnswer] = React.useState(false);
  return (
    <>
      {
        !question && !answer && 
        <div className="cardFront" onClick={() => setQuestion(true)}><span>Pergunta {props.pergunta}</span>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      }
      {
        question && !answer && 
        <div className="questionFace" onClick={() => setAnswer(true)}>
          <span>{props.question}</span>
          <ion-icon name="reload-outline"></ion-icon>
        </div>
      }
      {
        question && answer && <div className="answerFace">
          <span>{props.answer}</span>
          <div className="buttonsAnswer">
            <div className="buttonRed">
              <h4>Não lembrei</h4>
            </div>
            <div className="buttonYellow">
              <h4>Quase não lembrei</h4>
            </div>
            <div className="buttonGreen">
              <h4>Zap!</h4>
            </div>
          </div>
        </div>
      }

    </>
  )
}



export default function Cards() {
  
  const cards = [
    {
      pergunta: "1",
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript"
    },
    {
      pergunta: "2",
      question: "O React é __ ",
      answer: "uma biblioteca JavaScript para construção de interfaces"

    },
    {
      pergunta: "3",
      question: "Componentes devem iniciar com __ ",
      answer: "letra maiúscula"
    },
    {
      pergunta: "4",
      question: "Podemos colocar __ dentro do JSX ",
      answer: "expressões"
    },
    {
      pergunta: "5",
      question: "O ReactDOM nos ajuda __ ",
      answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
      pergunta: "6",
      question: "Usamos o npm para __ ",
      answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
      pergunta: "7",
      question: "Usamos props para __ ",
      answer: "passar diferentes informações para componentes "
    },
    {
      pergunta: "8",
      question: "Usamos estado (state) para __ ",
      answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },
  ]


  return (
    <>
      {cards.map((card, index) => <Card key={index} pergunta={card.pergunta} question={card.question} answer={card.answer} />)}
    </>
  )
}