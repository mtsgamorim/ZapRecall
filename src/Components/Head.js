import logo from "../assents/image/logo.png"

export default function Head(){
    return(
        <div className="head">
            <img className="headLogo" src={logo} alt="Logo"/>
            <h1>ZapRecall</h1>
        </div>
        
    )
}