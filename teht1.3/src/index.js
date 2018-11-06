import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

  return (
    <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osat={[osa1, osa2, osa3]} tehtavat={[tehtavia1, tehtavia2, tehtavia3]}/>
        <Yhteensa tehtavia={[tehtavia1,tehtavia2,tehtavia3]}/>
    </div>
  )
}

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osat[0]} tehtava={props.tehtavat[0]}/>
            <Osa osa={props.osat[1]} tehtava={props.tehtavat[1]}/>
            <Osa osa={props.osat[2]} tehtava={props.tehtavat[2]}/>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtava}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.tehtavia[0] + props.tehtavia[1] + props.tehtavia[2]} tehtävää</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)