// GET 

const listaProdutos = () => {
    fetch("hhttp://localhost:3000/produtos")
    .them(resposta => resposta.json())
    .catch(error => console.log(error))
}

export const produtoServicos = {
    listaProdutos
}
