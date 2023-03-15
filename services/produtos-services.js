// GET 

const listaProdutos = () => {
    fetch("http://127.0.0.1:5500/index.html")
    .them(resposta => resposta.json())
    .catch(error => console.log(error))
}

export const produtoServicos = {
    listaProdutos
}
