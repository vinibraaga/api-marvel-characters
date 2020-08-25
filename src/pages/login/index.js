import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Login extends Component {
    
    render() {
        return (
            <div className="pass">

                <h1>Access data for the Marvel world</h1>
                
                    <input type="text" placeholder="Private_key" id="private"></input>
                    <input type="password" placeholder="Public_Key"></input>

            
                <div className="previous">
                    <Link to={`/characters`} className="previous-link">Login</Link>
                </div>

            </div>
           
        )
    }
}