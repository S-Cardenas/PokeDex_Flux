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

var addPokemon = function(pokemon) {
  _pokemons[pokemon.id] = pokemon;
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case POKEMONCONSTANTS.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      this.__emitChange();
      break;

    case POKEMONCONSTANTS.POKEMON_RECEIVED:
      addPokemon(payload.pokemon);
      this.__emitChange();
      break;
  }
};

PokemonStore.all = function() {
  var pokemons = [];

  Object.keys(_pokemons).forEach(function(pokeKey) {
    pokemons.push(_pokemons[pokeKey]);
  });
  return pokemons;
};

PokemonStore.find = function(pokeId) {
  var id = parseInt(pokeId);
  return _pokemons[id];

};

module.exports = PokemonStore;
