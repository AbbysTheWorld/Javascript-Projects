
export default function PageError(){

    const styleUnline={
        display:"flex",
        flexDirection:"column",
        height:"100vh",
        alignItems:"center",
        color:"darkred",
        fontWeight:"Bolder",
        justifyContent:"center",
        fontSize:"2em",
        backgroundColor:"red"
    }

    return(
        <div style={styleUnline}>
            <h1>ERROR</h1>
            <p>404</p>
        </div>
    )
}