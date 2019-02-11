import React, { Component } from 'react'

class HelloWorld extends Component {
    state = {
        who: 'world!',
    };

    render() {
        return (
            <div className='helloworld'>
                <p>Hello, {this.state.who}</p>
                <button 
                    onClick={() => this.setState({ who: 'world!'})}
                >
                    World!
                </button>
                <button
                    onClick={() => this.setState({ who: 'friend!'})}
                >
                    Friend!
                </button>
                <button
                    onClick={() => this.setState({ who: 'react!'})}
                >
                    React!
                </button>
            </div>
        )
    }
}

export default HelloWorld