
alert('Qual é, não julga não! Estamos em construção!');
let projeto = document.querySelectorAll('.projeto')

projeto.forEach((projeto) => {
    let descricao = projeto.querySelector('.projeto-descricao')
    projeto.addEventListener('click', () => {
        descricao.classList.toggle('aparece-projeto')
        console.log('cliquei')
    })
}

)



