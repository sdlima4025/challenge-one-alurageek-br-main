const btnLogar = document.querySelector('[data-logar]')

btnEnter.addEventListener('click', (e) => {
    e.preventDefault()

    const user = 'coffegeek@alura.com'
    const pass = '123456'

    const inputNameLog = document.querySelector('[data-email]').value
    const inputPasswordLog = document.querySelector('[data-senha]').value
    
    
    // console.log(inputNameLog, inputPasswordLog)
    if (inputNameLog === user && inputPasswordLog === pass){
        window.location.href = '../views/listaProdutos.html'
    } else {
        alert('OPS! "Usuário" ou "Senha" inválidos')               
    } 
    
})