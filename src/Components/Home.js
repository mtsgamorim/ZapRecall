export default function Home({setTela}){

    return (  
            <div className="adjust">
                <img className="primaryLogo" src="/image/logo.png" alt="Logo"/>
                <h1>ZapRecall</h1>
                <div className="buttonStart" onClick={() => setTela('tela')}>
                    <span>Iniciar Recall!</span>
                </div>
            </div>
    )
} 