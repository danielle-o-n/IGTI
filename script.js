
// data.results.forEach(data => { 
// });

window.addEventListener('load' , ()=>{

    // async function carga (){
    //     const dados = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
    //     const retorno =  JSON.parse(dados)
    //     return retorno;
    // }

    // console.log(carga());

    let inputPesquisa = document.querySelector('#buscaId');
    let botao = document.querySelector('#btnBuscar');

    botao.addEventListener('click',pesquisa)

    inputPesquisa.addEventListener('keyup' , precionaEnter)

    //Essa função limpa a tela antes de uma nova pesquisa, transforma o texto digitado em minusculo juntamente com

    function pesquisa () {
        let exibir = document.querySelector('#usuarios ul')

        exibir.innerHTML = "";

        let texto = inputPesquisa.value.toLowerCase();
        let encontrados = data.results.filter((data)=>{
            return (data.name.first + data.name.last).toLowerCase().indexOf(texto) === 0; 
        })

        // Estrutura de repetição - monta a lista para ser exibida / cria o elemento (li), e acrescenta nome, sobrenome e idade.
        encontrados.forEach(pessoa=> {
            let li = document.createElement("li");
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = pessoa.picture.medium
            div.textContent = pessoa.name.first + " " + pessoa.name.last + ", " + pessoa.dob.age + " anos";
            li.appendChild(img)
            li.appendChild(div)
            exibir.appendChild(li);
        });

        console.log(encontrados);
        
    }

    //Função quando precionar a tecla Enter.
    function precionaEnter(ke) {

        if(ke.keyCode==13){
            pesquisa(); //chama a outra função de pesquisa.
        }
        
}
})