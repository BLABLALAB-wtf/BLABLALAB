

function alerta(){
    alert('Sem julgamentos, viu?! Ainda tamo construindo.')
}

setTimeout(alerta,1000)

projeto.forEach((projeto) => {
    let descricao = projeto.querySelector('.projeto-descricao')
    projeto.addEventListener('click', () => {
        descricao.classList.toggle('aparece-projeto')
        console.log('cliquei')
    })
}

)



