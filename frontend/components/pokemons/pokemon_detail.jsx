var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    ApiUtil = require('../../utils/api_util');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return { pokemon: null  };
  },

  componentDidMount: function() {
    this.pokeKey = PokemonStore.addListener(this.getStateFromStore);
    // this.getStateFromStore();
  },

  componentWillReceiveProps: function(newProps) {
    var id = newProps.params.pokemonId;
    ApiUtil.fetchSinglePokemon(id);
    this.setState({pokemon: PokemonStore.find(id)});
  },

  componentWillUnmount: function() {
    this.pokeKey.remove();
  },

  getStateFromStore: function() {
    var pokeId = this.props.params.pokemonId;
    this.setState({pokemon: PokemonStore.find(pokeId)});
  },

  render: function() {
    if (!this.state.pokemon) {
      return <div></div>;
    }
    var name = this.state.pokemon.name;
    var atk = this.state.pokemon.attack;
    var dfn = this.state.pokemon.defense;
    var moves = this.state.pokemon.moves.join(', ');
    var img = this.state.pokemon.image_url;


    console.log(this.state.pokemon.toys);
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            <h2>{name}</h2>
            <ul>
              <li>Attack: {atk}</li>
              <li>Defense: {dfn}</li>
              <li>Moves: {moves}</li>
            </ul>
            <img src={img} />
          </div>
        </div>
      </div>
    );
  }

});


module.exports = PokemonDetail;
