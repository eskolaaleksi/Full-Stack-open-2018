import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad:0
        }
    }

    incrementGood =  () => this.setState({ good: this.state.good + 1 })
    incrementNeutral =  () => this.setState({ neutral: this.state.neutral + 1 })
    incrementBad = ()  => this.setState({ bad: this.state.bad + 1 })

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <div>
                    <Button
                        handleClick={this.incrementGood}
                        text="hyvä"
                    />
                    <Button
                        handleClick={this.incrementNeutral}
                        text="neutraali"
                    />
                    <Button
                        handleClick={this.incrementBad}
                        text="huono"
                    />
                </div>
                <h1>statistiikka</h1>
                <div>hyvä {this.state.good}</div>
                <div>neutraali {this.state.neutral}</div>
                <div>huono {this.state.bad}</div>
            </div>
        )
    }
}
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)


ReactDOM.render(<App />, document.getElementById('root'))