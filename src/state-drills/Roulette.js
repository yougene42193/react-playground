import React, { Component } from 'react'

class Roulette extends Component {
    static defaultProps ={
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    clickHandle = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    displayRender() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if(spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if(chamber === bulletInChamber) {
            return 'BANG!!!!!'
        } else {
            return "you're safe!"
        }
    }

    render() {
        return (
            <div className='Roulette'>
                <p>{this.displayRender()}</p>
                <button
                  onClick={this.clickHandle}
                >
                Pull the trigger!
                </button>
            </div>
        )
    }
}

export default Roulette