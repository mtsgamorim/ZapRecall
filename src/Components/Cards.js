import React from "react";

function Card(props) {
  const [question, setQuestion] = React.useState(false);
  const [answer, setAnswer] = React.useState(false);
  const [travar, setTravar] = React.useState(false);
  const [semVolta, setSemVolta] = React.useState(false);
  const [redCss, setRedCss] = React.useState(false);
  const [yellowCss, setYellowCss] = React.useState(false);
  const [greenCss, setGreenCss] = React.useState(false);

  function red(){
    if(!travar){
      setTravar(true);
      props.setContador(props.contador + 1);
      setAnswer(false);
      setQuestion(false);
      setSemVolta(true);
      setRedCss(true);
    }
  }
  function yellow(){
    if(!travar){
      setTravar(true);
      props.setContador(props.contador + 1);
      setAnswer(false);
      setQuestion(false);
      setSemVolta(true);
      setYellowCss(true);
    }
  }

  function green(){
    if(!travar){
      setTravar(true);
      props.setContador(props.contador + 1);
      setAnswer(false);
      setQuestion(false);
      setSemVolta(true);
      setGreenCss(true);
    }
  }

  
  return (
    <>
      {
        !question && !answer && 
        <div className={`${(!semVolta && "cardFront") || (semVolta && redCss && "cardFrontRed") || (semVolta && yellowCss && "cardFrontYellow") || (semVolta && greenCss && "cardFrontGreen")}`} onClick={() => setQuestion(semVolta ? false : true)}><span>Pergunta {props.pergunta}</span>
          <ion-icon name={`${(!semVolta && "play-outline") || (semVolta && redCss && "close-circle") || (semVolta && yellowCss && "help-circle") || (semVolta && greenCss && "checkmark-circle")}`}>   </ion-icon>
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
            <div className="buttonRed" onClick={red}>
              <h4>Não lembrei</h4>
            </div>
            <div className="buttonYellow" onClick={yellow}>
              <h4>Quase não lembrei</h4>
            </div>
            <div className="buttonGreen" onClick={green}>
              <h4>Zap!</h4>
            </div>
          </div>
        </div>
      }

    </>
  )
}



export default function Cards(props) {
  
  return (
    <>
      {props.cards.map((card, index) => <Card key={index} pergunta={card.pergunta} question={card.question} answer={card.answer} setContador={props.setContador} contador={props.contador} />)}
    </>
  )
}