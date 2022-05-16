export default function FooterAcerto(props) {
    return (
        <div className="footerFinal">
            <h6>🥳 Parabéns!</h6>
            <span>Você não esqueceu de nenhum flashcard!</span>
            <span className="espacar">{props.contador}/{props.tamanhoDeck} concluidos</span>
            <div className="iconesFooter">
                {props.icones.map((i, index) => {return (
                    <div key={index}>
                        <div className="red">
                            {i === 1 && <ion-icon name="close-circle"></ion-icon>}
                        </div>
                        <div className="yellow">
                            {i === 2 && <ion-icon name="help-circle"></ion-icon>}
                        </div>
                        <div className="green">
                            {i === 3 && <ion-icon name="checkmark-circle"></ion-icon>}
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}