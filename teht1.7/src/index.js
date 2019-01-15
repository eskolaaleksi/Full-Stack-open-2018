import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad:0,
            average:0,
            positive:0,
            sum: 0
        }
    }

    incrementGood =  () => this.setState({
        sum: this.state.sum +1,
        good: this.state.good + 1},
        this.updateValues)

    incrementNeutral =  () => this.setState({
        sum: this.state.sum +1,
        neutral: this.state.neutral + 1},
        this.updateValues)

    incrementBad = ()  => this.setState({
        sum: this.state.sum +1,
        bad: this.state.bad + 1},
        this.updateValues)

    updateValues = () => this.setState({
        average: (this.state.good - this.state.bad)/this.state.sum,
        positive: this.state.good/this.state.sum*100})

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
                <div>keskiarvo {this.state.average}</div>
                <div>positiivisia {this.state.positive} %</div>
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