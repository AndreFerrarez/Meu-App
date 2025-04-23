import React, { Component } from 'react';
import './CounterBind.css';

export default class CounterBind extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState(prev => ({ count: prev.count + 1 }));
    }

    render() {
        return (
            <div className="counter-bind-container">
                <h2>Contador com bind</h2>
                <p>Contagem atual: {this.state.count}</p>
                <button onClick={this.increment}>Incrementar</button>
            </div>
        );
    }
}
