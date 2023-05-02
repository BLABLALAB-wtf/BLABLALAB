
function alerta(){
    alert('Sem julgamentos, viu?! Ainda tamo construindo.')
}

setTimeout(alerta,1000)
let projeto = document.querySelectorAll('.projeto')

projeto.forEach((projeto) => {
    let descricao = projeto.querySelector('.projeto-descricao')
    projeto.addEventListener('click', () => {
        descricao.classList.toggle('aparece-projeto')
        console.log('cliquei')
    })
}

)



