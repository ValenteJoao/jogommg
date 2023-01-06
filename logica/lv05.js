const grid = document.querySelector('.grid');
const vida = document.querySelector('.vida');

const life = ['<img src="img/life.png">',
  '<img src="img/life.png">',
  '<img src="img/life.png">',
  '<img src="img/life.png">',
  '<img src="img/life.png">']

const lifeloss = `<img src="img/lifeloss.png">`

var lifescontrol = 6;

//ADD CARDS
const persona = [
  'jeremias',
  'querocafe',
  'serjao',
  'vindiesel',
  'bichao',
  'cacete',
  'irineu',
];

checarvidas()

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
  if (primeiraPersona == segundaPersona) {

    PrimeiraCarta.firstChild.classList.add('acertou');
    SegundaCarta.firstChild.classList.add('acertou');

    PrimeiraCarta = '';
    SegundaCarta = '';

  }
  else {
    setTimeout(() => {
      life.pop();
      life.unshift(lifeloss);

      checarvidas();

      PrimeiraCarta.classList.remove('reveal-card');
      SegundaCarta.classList.remove('reveal-card');

      PrimeiraCarta = '';
      SegundaCarta = '';


    }, 400);
  }

}

const createCard = (persona) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('https://raw.githubusercontent.com/ValenteJoao/jogommg/main/img/${persona}.jpg')`;

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


//funcao das vidas

var perdeulife = `<main class="perdeu">
<h1 class="comunicado">Suas vidas acabaram! <br>Você perdeu!</h1>
<a class="jogarnovamente"href="level05.html">Jogar novamente</a>
<a class="voltar" href="niveis.html">Voltar</a>
</main>`

function checarvidas() {
  vida.innerHTML = ""
  life.forEach(lifes => vida.innerHTML += lifes);
  lifescontrol--;

  if (lifescontrol == 0) {
    document.getElementById('tela').remove()
    tema.innerHTML += perdeulife
  }
}


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
var duration = 30  // Sempre passar em segundos
var timerOff = duration * 1000 + 2000

//exibicao tela
window.onload = function para() {

  var display = document.querySelector("#timer") // Elemento para exibir
  startTimer(duration, display); // Inicia a funcao
}

// Perdeu

var perdeu = `<main class="perdeu">
<h1 class="comunicado">O tempo acabou! <br>Você perdeu!</h1>
<a class="jogarnovamente"href="level05.html">Jogar novamente</a>
<a class="voltar" href="niveis.html">Voltar</a>
</main>`

var main = document.getElementById('tela')

var tema = document.getElementById('pagein')

setTimeout(function () {

  document.getElementById('tela').remove()
  tema.innerHTML += perdeu

}, timerOff);


//Ganhou

var ganhou = `<main class="perdeu">
<h1 class="comunicado">Fim de Jogo! <br>Você Zerou!</h1>
<a class="voltar" href="niveis.html">Voltar</a>
</main>`


setInterval(function () {

  var win = document.getElementsByClassName('face front acertou');

  if (win.length == 14) {
    document.getElementById('tela').remove();
    tema.innerHTML += ganhou;
  }

}, 1000);

function voltarinicio() {
  window.location = 'niveis.html'
}