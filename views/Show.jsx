const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return(
            <div>
                <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <h2>Type: {pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}</h2>
                <img src = {pokemon.img} alt=""/>
                <nav>
                    <a href='/pokemon'>back</a>
                </nav>
            </div>
            )
    }
}

module.exports = Index