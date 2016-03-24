var React = require('react');

var PokemonIndexItem = React.createClass({

  render: function() {
    var name = this.props.pokemon.name;
    var type = this.props.pokemon.poke_type;
    return ( <div>Name: {name}, Type: {type}</div> );
  }

});


module.exports = PokemonIndexItem;
