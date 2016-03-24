var ReactDOM = require('react-dom'),
    React = require('react'),
    PokemonsIndex = require('./components/pokemons/pokemons_index'),
    Router = require('react-router').Router,
    Route = require('react-router').Route;


var App = React.createClass({
  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
    </Router>,




    document.getElementById("root")
  );
});
