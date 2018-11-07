import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
        nimi: 'Reactin perusteet',
        tehtavia: 10
        },
        {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
        },
        {
        nimi: 'Komponenttien tila',
        tehtavia: 14
        }
    ]

  return (
    <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osat={osat}/>
        <Yhteensa osat={osat}/>
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
            <Osa osa={props.osat[0].nimi} tehtava={props.osat[0].tehtavia}/>
            <Osa osa={props.osat[1].nimi} tehtava={props.osat[1].tehtavia}/>
            <Osa osa={props.osat[2].nimi} tehtava={props.osat[2].tehtavia}/>
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
            <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)