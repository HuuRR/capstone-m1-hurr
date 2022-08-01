const data = [
    {
    id: 0,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Nacional",
    nomeDoProduto: "Vinho Bartolomeu",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos itaque officiis aperiam fugit modi qui error! Officiis cumque accusamus perspiciatis architecto voluptates nam deserunt aperiam necessitatibus, consequatur, delectus adipisci!",
    valor: "R$ 340,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 1,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Nacional",
    nomeDoProduto: "Vinho Baltazar",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos itaque officiis aperiam fugit modi qui error! Officiis cumque accusamus perspiciatis architecto voluptates nam deserunt aperiam necessitatibus, consequatur, delectus adipisci!",
    valor: "R$ 320,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 2,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Própria",
    nomeDoProduto: "Vinho Arthas",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos itaque officiis aperiam fugit modi qui error! Officiis cumque accusamus perspiciatis architecto voluptates nam deserunt aperiam necessitatibus, consequatur, delectus adipisci!",
    valor: "R$ 640,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 3,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Importado",
    nomeDoProduto: "Vinho Sylvannas",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos itaque officiis aperiam fugit modi qui error! Officiis cumque accusamus perspiciatis architecto voluptates nam deserunt aperiam necessitatibus, consequatur, delectus adipisci!",
    valor: "R$ 920,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 4,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Própria",
    nomeDoProduto: "Vinho Garrosh",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos itaque officiis aperiam fugit modi qui error! Officiis cumque accusamus perspiciatis architecto voluptates nam deserunt aperiam necessitatibus, consequatur, delectus adipisci!",
    valor: "R$ 880,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 5,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Própria",
    nomeDoProduto: "Vinho LK",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos itaque officiis aperiam fugit modi qui error! Officiis cumque accusamus perspiciatis architecto voluptates nam deserunt aperiam necessitatibus, consequatur, delectus adipisci!",
    valor: "R$ 358,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 6,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Própria",
    nomeDoProduto: "Vinho HuuRR",
    descricao: "O mais caro de todos, valorize o mercado nacional e pague ICMS multiplas vezes",
    valor: "R$ 1950,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 7,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Importado",
    nomeDoProduto: "Vinho Luis XV",
    descricao: "Pequeno no tamanho, mas grande no preço",
    valor: "R$ 620,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 8,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Importado",
    nomeDoProduto: "Vinho Orgrimmar",
    descricao: "Mas de onde será que vem as uvas? nem agua tem na região.",
    valor: "R$ 630,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 9,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Importado",
    nomeDoProduto: "Vinho Dalaran",
    descricao: "MÁGICO! Simplesmente a melhor palavra possível para descreve-lo.",
    valor: "R$ 440,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 10,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Nacional",
    nomeDoProduto: "Vinho Grommash",
    descricao: "Gostinho de FEL(icidade) na sua mesa",
    valor: "R$ 750,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},
{
    id: 11,
    fundoCard: "",
    img: "Desenho-Vinho-PNG.png",
    tag: "Nacional",
    nomeDoProduto: "Vinho Undercity",
    descricao: "Sim, ainda existe vida na cidade, e as pessoas seguem produzindo o melhor vinho de Eastern Kingdoms",
    valor: "R$ 220,00",
    adicionarCarrinho: "Adicionar ao carrinho",
},

]

const itensNoCarrinho = []

function addCarrinho (id, data){
    itensNoCarrinho.push(data[id])
    carrinhoUi(itensNoCarrinho)
    somaProduto(itensNoCarrinho)
    somaValorProduto(itensNoCarrinho)
    //console.log(itensNoCarrinho)
}

function delCarrinho (id, itensNoCarrinho){
    itensNoCarrinho.splice(itensNoCarrinho[id], 1)
    carrinhoUi(itensNoCarrinho)
    somaProduto(itensNoCarrinho)
    somaValorProduto(itensNoCarrinho)
}


// funcão que adiciona os cards ao container principal.
function addCard(arrayCard){
    const vitrine = document.querySelector(".container")
    vitrine.innerHTML = ''
    for (let i = 0; i < arrayCard.length; i++) {   
        const div = document.createElement("div")
        div.classList.add("card")
        //div.id = arrayCard[i].id
    
        const div2 = document.createElement("div")
        div2.classList.add("fundo-card-imagem")
        
        const img = document.createElement("img")
        img.classList.add("card-imagem")
        img.src = arrayCard[i].img

        const tag = document.createElement("span")
        tag.classList.add("card-tag")
        tag.innerText = arrayCard[i].tag

        const h3 = document.createElement("h3")
        h3.classList.add("nome-do-produto")
        h3.innerText = arrayCard[i].nomeDoProduto

        const descricao = document.createElement("p")
        descricao.classList.add("descricao-produto")
        descricao.innerText = arrayCard[i].descricao

        const valor = document.createElement("span")
        valor.classList.add("preco")
        valor.innerText = arrayCard[i].valor

        const adcCarrinho = document.createElement("span")
        adcCarrinho.classList.add("adicionar-carrinho")
        adcCarrinho.innerText = "Adicionar ao carrinho"
        adcCarrinho.addEventListener("click",()=> addCarrinho(arrayCard[i].id, data))

        div2.appendChild(img)

        div.appendChild(div2)
        div.appendChild(tag)
        div.appendChild(h3)
        div.appendChild(descricao)
        div.appendChild(valor)
        div.appendChild(adcCarrinho)

        vitrine.appendChild(div)
    }

}
addCard(data)



function carrinhoUi(arrayCard){
    const itensCarrinho = document.querySelector(".itens-carrinho")
    itensCarrinho.innerHTML = ""
    for(let i = 0; i < arrayCard.length; i++) {
        const div = document.createElement("div")
        div.classList.add("item-no-carrinho")
        
        const div2 = document.createElement("div")
        div2.classList.add("fundo-item-no-carrinho")

        const img = document.createElement("img")
        img.classList.add("carrinho-imagem")
        img.src = arrayCard[i].img

        const div3 = document.createElement("div")
        div3.classList.add("dados-item-carrinho")
        
        const h3 = document.createElement("h3")
        h3.classList.add("nome-do-produto-carrinho")
        h3.innerText = arrayCard[i].nomeDoProduto

        const valor = document.createElement("span")
        valor.classList.add("preco-carrinho")
        valor.innerHTML = arrayCard[i].valor

        const remCarrinho = document.createElement("span")
        remCarrinho.classList.add("remover-do-carrinho")
        remCarrinho.innerText = "Remover produto"
        remCarrinho.addEventListener("click",()=> delCarrinho(arrayCard[i].id, itensNoCarrinho))

        div2.appendChild(img)
        div3.appendChild(h3)
        div3.appendChild(valor)
        div3.appendChild(remCarrinho)

        div.appendChild(div2)
        div.appendChild(div3)

        itensCarrinho.appendChild(div)
    }
}


function somaProduto(itensNoCarrinho){
    let totalItens = itensNoCarrinho.length
    const totalDeItens = document.getElementById("qtde-carrinho")
    totalDeItens.innerText = totalItens
}


function somaValorProduto(itensNoCarrinho){
    let valorTotalItens = 0
    for(let i = 0; i < itensNoCarrinho.length; i++) {
        let valoresSemCifrao = itensNoCarrinho[i].valor.replace(/R|\$| |,/gm,"")
        valorTotalItens += valoresSemCifrao/100    
    }
    const totalValorItens = document.getElementById("totais-carrinho")
    totalValorItens.innerText = "R$ " + valorTotalItens.toFixed(2).replace(/\./gm, ",")
    
}


function filterTag(event){
    //console.log(event)
    let tagClicada = []
    const item = event.target
    const arrayItens = document.querySelectorAll(".item-nav")
    //console.log(item)
    //console.log(item.dataset.tag)
    if (item.dataset.tag === "Todos") {
        addCard(data)
    } else {
        for (let i = 0; i < data.length; i++){
            if (data[i].tag.includes(item.dataset.tag)===true) {
                tagClicada.push(data[i])
            }
        }
        //console.log(tagClicada)
        addCard(tagClicada)
    }
    for (let i = 0; i < arrayItens.length; i++) {
        arrayItens[i].classList.remove("tag-ativa")
    }
    item.classList.add("tag-ativa")
    
}

const navItem = document.getElementById("navbar")
navItem.addEventListener("click", filterTag)
