import React, { Component } from 'react';
import api from '../../services/getCharacters';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        characters: [],
    }

    componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = async () => {
        const ts = "get";
        const apikey = "847c34aead6f554b0145ec1203fb7151";
        const hash = "c466ff8feb59b13b16bfdf72d8d42d7d";

        const response = await api.get(`v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=6?`);

        const { results } = response.data.data;

        this.setState({ characters: results });
        console.log(response.data.data)
    };

    prevPage = () => {

    }

    nextPage = () => {

    }

    render() {
        const { characters } = this.state;

        return (
            <div className="characters-list">
                {characters.map(character => (
                    <article key={character.id}>
                        <strong>{character.name}</strong>
                        <p>{character.description}</p>
                        <span>{character.modified}</span>
                        <Link to={`/character/${character.id}`}>Details</Link>
                    </article>
                ))}
                <div className="pagination">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}