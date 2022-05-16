import logo from "../assents/image/logo.png"

export default function Home({setTela}){

    return (  
            <div className="adjust">
                <img className="primaryLogo" src={logo} alt="Logo"/>
                <h1>ZapRecall</h1>
                <div className="buttonStart" onClick={() => setTela('tela')}>
                    <span>Iniciar Recall!</span>
                </div>
            </div>
    )
} 