import FooterAcerto from "./FooterAcerto"
import FooterErro from "./FooterErro"




export default function FooterFinal(props) {
    return (
        <>
            {!props.temErrada ? <FooterAcerto contador={props.contador} tamanhoDeck={props.tamanhoDeck} icones={props.icones}/> : <FooterErro contador={props.contador} tamanhoDeck={props.tamanhoDeck} icones={props.icones}/>}
        </>

    )
}