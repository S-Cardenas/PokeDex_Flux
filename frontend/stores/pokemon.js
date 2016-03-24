var AppDispatcher = require('../dispatcher/dispatcher'),
    POKEMONCONSTANTS = require('../constants/pokemon_constants'),
    Store = require('flux/utils').Store,
    PokemonStore = new Store(AppDispatcher);


var _pokemons = {};


var resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function (pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case POKEMONCONSTANTS.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      this.__emitChange();
  }
};

PokemonStore.all = function() {
  var pokemons = [];

  Object.keys(_pokemons).forEach(function(pokeKey) {
    pokemons.push(_pokemons[pokeKey]);
  });
  return pokemons;
};

module.exports = PokemonStore;
