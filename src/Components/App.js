import Home from "./Home"
import React from "react";
import Content from "./Content";





export default function App() {
    const [tela, setTela] = React.useState('i');
    return(
        <>
            {
                tela === 'init' ? <Home setTela={setTela}/> : <Content/>
            }
        </>       
    )
}