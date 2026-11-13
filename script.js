async function buscarPokemon() {
  const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const dados = await resposta.json();
  console.log(dados);
  const titulo = document.getElementById("titulo");
  const foto = document.getElementById("foto");
  const numero = document.getElementById("numero");
  const tipo = document.getElementById("tipo");

  titulo.textContent = dados.name
  foto.src = dados.sprites.front_default
  numero.textContent = dados.id
  tipo.textContent = dados.types[0].type.name
}

buscarPokemon();