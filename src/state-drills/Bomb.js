import React, { Component } from 'react'

class Bomb extends Component {
    state = {
        count: 0,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('setInterval counter')
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    displayRender() {
        const { count } = this.state
        if (count % 2 === 0) {
            return 'tick'
        } else if (count >= 8) {
            return 'boom'
        } else {
            return 'tock'
        }
    }

    render() {
        return (
            <div className='bombcount'>
                <p>{this.displayRender()}</p>
            </div>
        )
    }
}

export default Bomb