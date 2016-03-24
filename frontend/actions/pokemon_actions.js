var AppDispatcher = require('../dispatcher/dispatcher'),
    POKEMONCONSTANTS = require('../constants/pokemon_constants');

var PokemonActions = {
  receiveAllPokemons: function (pokemons) {
    AppDispatcher.dispatch({
      actionType: POKEMONCONSTANTS.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function (pokemon) {
    AppDispatcher.dispatch({
      actionType: POKEMONCONSTANTS.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};


module.exports = PokemonActions;
