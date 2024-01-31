import { useState } from "react"
import QuizTemplate from "../PaginaQuizs/QuizTemplate"
import Popup from "../Popup/Popup"
import "./PageInitial.css"

export default function PageStart() {

    const [IsVisible,setIsVisible] = useState(true)
    const [popupVisibilty,setPopupVisibilty] = useState(false)

    return(  
        <>
        {IsVisible==true?<div className="page-start-body">
        <div className="page-start-content">
            <h1>Quiz de super herois!</h1>
            <p>Descubra se seu conhecimento sobre super-herois está bom!</p>
            <button onClick={()=>setIsVisible(false)}>Entrar</button>
            <button onClick={()=>setPopupVisibilty(true)}>Duvidas..</button>
        </div>
      </div>:null} 
        {IsVisible==false?<QuizTemplate/>:null}
        {popupVisibilty==true?<Popup functionClose={setPopupVisibilty} content="Esse e um quiz onde seu objetivo e acertar todas as questoes!"/>:null}
        </>
    )
  }