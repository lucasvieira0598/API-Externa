let Conteudo_Pagina = document.getElementById("Conteudo")
fetch("https://mocki.io/v1/8f1dfb1a-ecff-456c-837a-204f2de94b34")
.then(Response => Response.json())
.then(json => {
    //console.log(json)
    json.forEach(element => {
        console.log(element.name)
        
    });
})
