import Head from "./Head"
import Cards from "./Cards"
import Footer from "./Footer"
import React from "react";
import FooterFinal from "./FooterFinal";

export default function Content() {
    const [contador, setContador] = React.useState(0);
    const [icones, setIcones] = React.useState([]);
    const [temErrada, setTemErrada] = React.useState(false);

    let cards = [
        {
          
          question: "O que é JSX?",
          answer: "Uma extensão de linguagem do JavaScript"
        },
        {
          
          question: "O React é __ ",
          answer: "uma biblioteca JavaScript para construção de interfaces"
    
        },
        {
          
          question: "Componentes devem iniciar com __ ",
          answer: "letra maiúscula"
        },
        {
          
          question: "Podemos colocar __ dentro do JSX ",
          answer: "expressões"
        },
        {
          
          question: "O ReactDOM nos ajuda __ ",
          answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
          
          question: "Usamos o npm para __ ",
          answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
          
          question: "Usamos props para __ ",
          answer: "passar diferentes informações para componentes "
        },
        {
          
          question: "Usamos estado (state) para __ ",
          answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
      ]

      let tamanhoDeck = cards.length;

    function comparador() { 
        return Math.random() - 0.5; 
    }

    cards = cards.sort(comparador);


    return (
        <div className="marginPage">
            <Head />
            <Cards setContador={setContador} contador={contador} cards={cards} setIcones={setIcones} icones={icones} setTemErrada={setTemErrada} />
            {contador !== tamanhoDeck ? <Footer contador={contador} tamanhoDeck={tamanhoDeck} icones={icones} /> : <FooterFinal contador={contador} tamanhoDeck={tamanhoDeck} icones={icones} temErrada={temErrada}/>}
            
        </div>
    )
}