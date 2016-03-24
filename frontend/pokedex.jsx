var ReactDOM = require('react-dom'),
    React = require('react'),
    PokemonsIndex = require('./components/pokemons/pokemons_index'),
    PokemonDetail = require('./components/pokemons/pokemon_detail'),
    Router = require('react-router').Router,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory,
    Route = require('react-router').Route;


var App = React.createClass({
  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail} />
      </Route>
    </Router>,




    document.getElementById("root")
  );
});
