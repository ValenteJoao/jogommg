var level01 = document.querySelector("#lv01");
var level02 = document.querySelector("#lv02");
var level03 = document.querySelector("#lv03");
var level04 = document.querySelector("#lv04");
var seta1 = document.querySelector(".seta");
level01.addEventListener('click', ir01);
level02.addEventListener('click', ir02);
level03.addEventListener('click', ir03);
level04.addEventListener('click', ir04);


function ir01() {
  window.location = 'level01.html'
}
function ir02() {
  window.location = 'level02.html'
}
function ir03() {
  window.location = 'level03.html'
}
function ir04() {
  window.location = 'level04.html'
}

//

function verificarlv() {
  var chaveA = localStorage.getItem('chave1')
  var chaveB = localStorage.getItem('chave2')
  var chaveC = localStorage.getItem('chave3')

  if (chaveA == 'ok') {
    level02.removeAttribute('disabled');
  }
  if (chaveB == 'ok') {
    level03.removeAttribute('disabled');
  }
  if (chaveC == 'ok') {
    level04.removeAttribute('disabled');
  }
}

function voltarinicio() {
  window.location = 'index.html'
}