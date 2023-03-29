// GET 
const listaProdutos =   () => 
    fetch("hhttp://localhost:3000/produtos")
    return await resposta.json()
    .them(resposta => resposta.json())
    .catch(error => console.log(error));

// POST
const criaProdutos =  (name, imgURL, price) => {
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imgURL: imgURL, 
            name: name, 
            price: price,
            
        })
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.body
        }
    })
    throw new Error("Não foi possivél cadastrar o produto")
}

// const deleteProdutos = async (id) => {
//     const response = await fetch(`http://localhost:3000/products/${id}`, {
//         method: 'DELETE'
//     })
// }

// const pullProdutos = async (id) => {
//     const response = await fetch(`http://localhost:3000/products/${id}`)
//     return await response.json()
// }

// const editProdutos = async (imgURL, alt, category, name, price, description, id) => {
//     const response = await fetch(`http://localhost:3000/products/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify({
//             imgURL: imgURL, 
//             alt: alt,
//             category: category, 
//             name: name, 
//             price: price,
//             description: description
//         })
//     })
//     .then( res => {
//         return res.body
//     })
// }

// const createMenssagem = async (name, message, id) => {
//     const response = await fetch('http://localhost:3000/message', {
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify({
//             name: name, 
//             message: message,
//         })
//     })
//     .then( res => {
//         return res.body
//     })
// }

export const produtoServicos = {
    listaProdutos,
    criaProdutos,
    deleteProdutos,
    pullProdutos,
    editProdutos,
    createMenssagem

}
