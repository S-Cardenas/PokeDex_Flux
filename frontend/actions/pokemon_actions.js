var AppDispatcher = require('../dispatcher/dispatcher'),
    POKEMONCONSTANTS = require('../constants/pokemon_constants');

var PokemonActions = {
  receiveAllPokemons: function (pokemons) {
    AppDispatcher.dispatch({
      actionType: POKEMONCONSTANTS.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};


module.exports = PokemonActions;
