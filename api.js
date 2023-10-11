import Usuario from "./usuarios"

let usuario_elemento = new Usuario()

let Conteudo_Pagina = document.getElementById("Conteudo")
fetch("https://mocki.io/v1/8f1dfb1a-ecff-456c-837a-204f2de94b34")
.then(Response => Response.json())
.then(json => {
    //console.log(json)
    json.forEach(element => {
        usuario_elemento.CriarUsuario(element.name,element.bio,element.language,element.id,Conteudo_Pagina)
        console.log(element.name)
        
    });
})
