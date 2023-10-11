import Usuario from "./usuarios.js"

let usuario_elemento = new Usuario()

let Conteudo_Pagina = document.getElementById("Conteudo")
fetch("https://mocki.io/v1/8f1dfb1a-ecff-456c-837a-204f2de94b34")
.then(Response => Response.json())
.then(json => {
    usuario_elemento._ListaUsuarios = json
    json.forEach(element => {
        usuario_elemento.CriarUsuario(element.name,element.bio,element.language,element.id,Conteudo_Pagina)
        console.log(element.name)
        
    });
})
let TipoBusca = "name"
let BuscaAlt= false
let Resposta = setInterval(() => {
    console.log(usuario_elemento._ListaUsuarios)
    clearInterval(Resposta)
    document.getElementById("LangBusca").addEventListener("click",()=>{
        if(BuscaAlt == false)
        {
            TipoBusca = "Lang"
            BuscaAlt = true
        }
        else{
            TipoBusca = "name"
            BuscaAlt= false
        }
    })
    
    document.getElementById("busca").addEventListener("click",()=>{
        let ValorBusca = document.getElementById("filtro").value
        let Busca_Feita = false
        usuario_elemento._ListaUsuarios.forEach(element => {
            if(element[TipoBusca].name == ValorBusca)
            {
                Conteudo_Pagina.innerHTML=""
                usuario_elemento.CriarUsuario(element.name,element.bio,element.language,element.id,Conteudo_Pagina)
                let Busca_Feita = true
            }
        });
        if (Busca_Feita == false){
            alert("Usuario digitado não existe!")
        }
    })
}, 90);
