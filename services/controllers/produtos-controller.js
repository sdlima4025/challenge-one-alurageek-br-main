const novoProduto = (name, id, imageUrl, price) => {
  const card = document.createElement("div")
  const conteudo = `
  
  <div class="titlleProdutos">
  <img class="img1" src="${imageUrl}" alt="starwars">
    <h1 class="starWars">${name}</h1>
    <p class="preco">${price}</p>
    <a class="link_card" href="../view/produtos.html?id=${id}">Ver produto</a>
    </div>
  `

    card.innerHTML = conteudo;

    return card;
}

const produtos = document.querySelector('[data-product]');