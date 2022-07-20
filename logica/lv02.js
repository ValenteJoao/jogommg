const grid = document.querySelector('.grid');

//ADD CARDS
const persona = [
  'jeremias',
  'querocafe',
  'serjao',
  'vindiesel',
  'bichao',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

var PrimeiraCarta = '';
var SegundaCarta = '';

function checarcartas() {
  const primeiraPersona = PrimeiraCarta.getAttribute('data-persona');
  const segundaPersona = SegundaCarta.getAttribute('data-persona');
  console.log(primeiraPersona)
  console.log(segundaPersona)

  if (primeiraPersona == segundaPersona) {

    PrimeiraCarta.firstChild.classList.add('acertou');
    SegundaCarta.firstChild.classList.add('acertou');

    PrimeiraCarta = '';
    SegundaCarta = '';

  }
  else {
    setTimeout(() => {
      PrimeiraCarta.classList.remove('reveal-card');
      SegundaCarta.classList.remove('reveal-card');

      PrimeiraCarta = '';
      SegundaCarta = '';


    }, 500);
  }

}

const createCard = (persona) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../img/${persona}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-persona', persona);

  return card;
}

function revealCard({ target }) {
  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (PrimeiraCarta == '') {
    target.parentNode.classList.add('reveal-card')
    PrimeiraCarta = target.parentNode;
  }
  else if (SegundaCarta == '') {
    target.parentNode.classList.add('reveal-card')
    SegundaCarta = target.parentNode;

    checarcartas();
  }

}

const loadGame = () => {

  const duplicatepersona = [...persona, ...persona];
  const embaralhado = duplicatepersona.sort(() => Math.random() - 0.5);

  embaralhado.forEach((persona) => {

    const card = createCard(persona);
    grid.appendChild(card);

  });
}

loadGame();

/////////////////////////////////////////////////////////////

var username = localStorage.getItem('player');
document.querySelector('.username').innerHTML = username;


//funcao do do timer

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      timer = "";
    }
  }, 1000);

}

//exibicao tela
window.onload = function para() {

  var duration = 25  // Sempre passar em segundos
  var display = document.querySelector("#timer") // Elemento para exibir
  startTimer(duration, display); // Inicia a funcao
}

// Perdeu

var perdeu = `<main class="perdeu">
<h1 class="comunicado">O tempo acabou! <br>Você perdeu!</h1>
<a class="jogarnovamente"href="level02.html">Jogar novamente</a>
<a class="voltar" href="niveis.html">Voltar</a>
</main>`

var main = document.getElementById('tela')

var tema = document.getElementById('pagein')

setTimeout(function () {

  document.getElementById('tela').remove()
  tema.innerHTML += perdeu

}, 27000);


//Ganhou

var ganhou = `<main class="perdeu">
<h1 class="comunicado">Você ganhou!</h1>
<a class="jogarnovamente"href="level03.html">Avançar Level</a>
<a class="voltar" href="niveis.html">Voltar</a>
</main>`


setInterval(function () {

  var win = document.getElementsByClassName('face front acertou');

  if (win.length == 10) {
    document.getElementById('tela').remove();
    tema.innerHTML += ganhou;
    localStorage.setItem('chave2', 'ok');
  }

}, 1000);

function voltarinicio() {
  window.location = 'niveis.html'
}