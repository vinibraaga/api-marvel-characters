import React, { Component } from 'react';
import api from '../../services/getCharacters'
import './styles.css';

export default class Main extends Component {
    state = {
        characters: [],
    }

    componentDidMount() {
        this.loadProducts();
    }
    loadProducts = async () => {
        const response = await api.get('v1/public/characters?ts=get&apikey=847c34aead6f554b0145ec1203fb7151&hash=c466ff8feb59b13b16bfdf72d8d42d7d&limit=6');

        this.setState({ characters: response.data.data.results });
        console.log(response.data.data.results)
    };

    render() {
        const { characters } = this.state;

        return (
            <div className="characters-list">
                {characters.map(character => (
                    <article key={character.id}>
                        <strong>{character.name}</strong>
                        <p>{character.description}</p>
                        <a href="">Detalhes</a>
                    </article>
                ))}
            </div>
        )
    }
}