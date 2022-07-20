var input = document.querySelector(".name");
var button = document.querySelector(".btnstart");

// Quando tiver um alguma escrita no input vai executar a funcao validateInput
input.addEventListener('input', validateInput);

// Quando for o clicado o botao start vai executar a funcao pegarnome
button.addEventListener('click', pegarnome);

// Essa funcao libera o botao start quando tem + 0 caract no input. //

function validateInput(event) {
  if (event.target.value.length > 0) {
    button.removeAttribute('disabled'); // Atributo la do html
  }
  else { //Add a classe disabled no html 
    button.setAttribute('disabled', "")
  }
}

// Essa funcao pega o evento de click, pega o nome do input e salva no localstorage

function pegarnome(event) {
  event.preventDefault(); // Para evitar que a pagina atualize pois e um form
  localStorage.setItem('player', input.value);
  window.location = 'niveis.html' //Envia pra pagina de niveis
}


