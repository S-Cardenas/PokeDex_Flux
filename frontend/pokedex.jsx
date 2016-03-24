var ReactDOM = require('react-dom'),
    React = require('react'),
    PokemonsIndex = require('./components/pokemons/pokemons_index');




document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <PokemonsIndex />, document.getElementById("root")
  );
});
