import Head from "./Head"
import Cards from "./Cards"
import Footer from "./Footer"
import React from "react";

export default function Content() {
    const [contador, setContador] = React.useState(0);
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

      let tamanhoDeck = cards.length;


    return (
        <div className="marginPage">
            <Head />
            <Cards setContador={setContador} contador={contador} cards={cards} />
            <Footer contador={contador} tamanhoDeck={tamanhoDeck} />
        </div>
    )
}