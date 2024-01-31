import "./Popup.css"

export default function Popup(props) {
  return(
    <>
      <div className="popup-body">
        <div className="popup-content" style={{backgroundColor:`${props.backgroundColor}`}}>
            <p onClick={()=>props.functionClose(false)}>X</p>
            <span>{props.subContent}</span>
            <h1>{props.content}</h1>
        </div>
      </div>
    </>
  )
}
