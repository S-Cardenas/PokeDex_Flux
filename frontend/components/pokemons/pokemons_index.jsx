var React = require('react'),
    ApiUtil = require('../../utils/api_util'),
    PokemonStore = require('../../stores/pokemon'),
    PokemonIndexItem = require('./pokemon_index_item');

var PokemonsIndex = React.createClass({
    getInitialState: function() {
      return { pokemons: [] };
    },

    componentDidMount: function() {
      this.pokeKey = PokemonStore.addListener(this._onChange);
      ApiUtil.fetchAllPokemons();

    },

    componentWillUnmount: function() {
      this.pokeKey.remove();
    },

    _onChange: function() {
      this.setState({pokemons: PokemonStore.all()});
    },

    render: function() {
      var ourPokemon = this.state.pokemons.map(function(pokemon, i) {
        return <li key={i} className="poke-list-item">
                  <PokemonIndexItem pokemon={pokemon}/>
               </li>;
      }.bind(this));

      return (
        <ul>
          {ourPokemon}
        </ul>
      );
    }


});


module.exports = PokemonsIndex;
