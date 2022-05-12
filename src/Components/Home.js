export default function Home(){
    function pageSwap(){
        
    }

    return (
        <>
            
            <div className="adjust">
                <img className="primaryLogo" src="/image/logo.png" alt="Logo"/>
                <h1>ZapRecall</h1>
                <div className="buttonStart" onClick={pageSwap}>
                    <span>Iniciar Recall!</span>
                </div>
            </div>
            

        </>
    )
} 