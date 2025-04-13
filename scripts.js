let circle = document.querySelector('.circle')
let image = document.querySelector('.cup')
let title = document.getElementById('title')
let highlight = document.getElementById('highlight')
let description = document.getElementById('description')

const flavors = {
  matcha: {
    name: 'Matcha Frappuccino',
    description: 'Uma combinação perfeita de chá verde matcha com leite e gelo, proporcionando um sabor equilibrado entre doçura e um toque levemente amargo.',
    color: '#017143' // Verde
  },
  sakura: {
    name: 'Sakura Frappuccino',
    description: 'Inspirado na flor de cerejeira, esse frappuccino traz um sabor floral e delicado, combinado com leite e chantilly para um toque especial.',
    color: '#eb7495' // Rosa
  },
  dragonfruit: {
    name: 'Dragon Fruit Frappuccino',
    description: 'Uma explosão tropical! Feito com pitaya e leite, esse frappuccino oferece uma experiência refrescante e vibrante, com um sabor exótico irresistível.',
    color: '#d752b1' // Roxo Pitaya
  }
}

function changeColor(color) {
  circle.style.background = color
}

function changeImage(img, flavorKey) {
  let flavor = flavors[flavorKey]

  image.src = img
  title.innerHTML = `<span id="highlight">${flavor.name}</span>` // Agora só exibe o nome do sabor
  description.innerHTML = flavor.description

  // Muda a cor do <span>
  highlight = document.getElementById('highlight') // Atualiza a referência do span
  highlight.style.color = flavor.color
}

// Inicializa o estado inicial
window.onload = function () {
  changeColor('#017143');
  changeImage('./assets/img1.png', 'matcha');
}