export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

const APIUtil = {
  fetchAllPokemon
};

export default APIUtil;
