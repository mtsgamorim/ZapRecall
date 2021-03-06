import React from "react";

export default function Foooter(props) {
    console.log(props.icones);

    return (
        <div className="footer">
            <span>{props.contador}/{props.tamanhoDeck} concluidos</span>
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