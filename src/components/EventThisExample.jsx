import React, { Component } from 'react';
import './EventThisExample.css';

export default class EventThisExample extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ message: 'Botão clicado!' });
    }

    render() {
        return (
            <div className="event-this-container">
                <h2>Event Handler com this</h2>
                <button onClick={this.handleClick}>Clique aqui</button>
                {this.state.message && <p className="message">{this.state.message}</p>}
            </div>
        );
    }
}
