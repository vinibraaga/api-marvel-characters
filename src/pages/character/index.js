import React, { Component } from 'react';
import api from '../../services/getCharacters';
import { Link } from 'react-router-dom';


import './styles.css';

export default class Character extends Component {
    state = {
        character: [],
        comics: [],
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const ts = "get";
        const apikey = "847c34aead6f554b0145ec1203fb7151";
        const hash = "c466ff8feb59b13b16bfdf72d8d42d7d";

        const response = await api.get(`v1/public/characters/${id}?apikey=${apikey}&hash=${hash}&ts=${ts}`);
        const { results } = response.data.data;
        this.setState({ character: results});

        // requisition of comics
        const requisition = await api.get(`v1/public/characters/${id}/comics?apikey=${apikey}&hash=${hash}&ts=${ts}`);

        this.setState({ comics: requisition.data.data.results});

        console.log(requisition.data.data.results);
    }


    render() {
        const { character } = this.state;
        const { comics } = this.state;

        return (
            <div className="character-info">
                  {character.map(character => (
                    <article key={character.id}>
    
                        <h1>{character.name}</h1>
                        <img src={character.thumbnail.path + "." + character.thumbnail.extension}></img>

                        {(() => {

                            if (!character.description == "") {
                                return (
                                    <p>{character.description}</p>
                                )
                            } else{
                                return (
                                    <p>This character has no description at the moment.</p>
                             )
                          }

                        })()}

                    </article>
                ))}

                <div className="previous">
                    <Link to={`/characters`} className="previous-link">Voltar</Link>
                </div>

                {comics.map(comic => (
                    <article key={comic.id}>
                        
                        <div className="comics-info">
                            <h2>{comic.title}</h2>
                            <img src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img>
                        </div>
                        

                    </article>
                ))}

            </div>
            
        )
    }
}