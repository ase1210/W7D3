export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon',
    dataType: 'json'
  })
);

window.fetchAllPokemon = fetchAllPokemon;