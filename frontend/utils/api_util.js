var PokemonActions = require('../actions/pokemon_actions');

var apiUtil = {
  fetchAllPokemons: function() {
    $.ajax({
      type: "GET",
      dataType: "JSON",
      url: "api/pokemon",
      success: function(pokemons) {
        PokemonActions.receiveAllPokemons(pokemons);
      },
      error: function() {
        console.log("Didn't catch em all.");
      }
    });
  },

};


module.exports = apiUtil;
