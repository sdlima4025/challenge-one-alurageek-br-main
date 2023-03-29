import { podutos-Services } from '../controllers/produtos-controller';


const formNewMessage = document.querySelector('[data-newMessage]')

formNewMessage.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const inputNameMess = e.target.querySelector('[data-name-mess]').value
    const inputMess = e.target.querySelector('[data-mess]').value
    
    // console.log(inputNameMess, inputMess)

    if (inputNameMess.length > 0 && inputMess.length > 0){
        poductsServices.createMessage(inputNameMess, inputMess)
        .then(() => {
            alert('Menssagem Enviada')
        })        
    } else if (inputNameMess.length === 0){
        alert('OPS! Você precisa inserir um "Nome" antes de enviar a menssagem!')
    } else{
        alert('OPS! Você não pode enviar uma "Menssagem" vazia!')
    }

})