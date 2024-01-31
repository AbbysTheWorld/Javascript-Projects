class Cxmssg{
    static cor="#888"
    static destino=null
    static divmsg=null
    
    static config=(config)=>{
        this.cor=config.cor
    }

    static mostrar=(titulo,texto)=>{
        this.destino=document.body   
        this.titulo=titulo
        this.texto=texto
        this.divmsg=document.createElement("div")
        const estilo_divmsg=
            "display:flex;"+
            "justify-content: center;"+
            "align-items:center;"+
            "position:absolute;"+
            "top:0px;"+
            "left:0px;"+
            "width:100%;"+
            "height:100vh;"+
            "background-color: rgba(0,0,0,0.7);"
        this.divmsg.setAttribute("id","divmsg")  
        this.divmsg.setAttribute("style",estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areaCx= 
            "display:flex;"+
            "justify-content:flex-start;"+
            "align-items:flex-start;"+
            "flex-direction:column;"+
            "width:300px;"
        const areaCX=document.createElement("div")
        areaCX.setAttribute("style",estilo_areaCx)
        this.divmsg.appendChild(areaCX)

        const estilo_tituloCx=
            "display:flex;"+
            "justify-content:flex-start;"+
            "width:100%;"+
            "background-color:"+this.cor+";"+
            "color:#fff;"+
            "padding:5px;"+
            "border-radius:5px 5px 0px 0px"
        const tituloCX=document.createElement("div")
        tituloCX.setAttribute("style",estilo_tituloCx)
        tituloCX.innerHTML=this.titulo
        areaCX.appendChild(tituloCX)

        const estilo_corpoCx=
        "display:flex;"+
        "justify-content:flex-start;"+
        "align-items:center;"+
        "width:100%;"+
        "color:#000;"+
        "background-color:#eee;"+
        "padding:30px 5px;"
        const corpoCX=document.createElement("div")
        corpoCX.setAttribute("style",estilo_corpoCx)
        corpoCX.innerHTML=this.texto
        areaCX.appendChild(corpoCX)

        const estilo_rodapeCx=
        "display:flex;"+
        "justify-content:space-around;"+
        "align-items:center;"+
        "width:100%;"+
        "color:#000;"+
        "background-color:#ccc;"+
        "border-radius:0px 0px 5px 5px;"
        const rodapeCX=document.createElement("div")
        rodapeCX.setAttribute("style",estilo_rodapeCx)
        areaCX.appendChild(rodapeCX)

        const estilo_botaoCx=
        "color:#fff;"+
        "background-color:"+this.cor+";"+
        "border-radius:5px;"+
        "cursor:pointer;"+
        "padding:10px 50px;"+
        "text-transform:uppercase;"
        const btn_ok = document.createElement("button")
        btn_ok.setAttribute("style",estilo_botaoCx)
        btn_ok.innerHTML="OK"
        btn_ok.addEventListener("click",()=>{
            this.ocultar()
        })
        rodapeCX.appendChild(btn_ok)

    }
    static ocultar=()=>{
        this.divmsg.remove()
    }
}
