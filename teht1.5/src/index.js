import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
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
      }

  return (
    <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osa={kurssi}/>
        <Yhteensa osa={kurssi}/>
    </div>
  )
}

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osa.osat[0].nimi} tehtava={props.osa.osat[0].tehtavia}/>
            <Osa osa={props.osa.osat[1].nimi} tehtava={props.osa.osat[1].tehtavia}/>
            <Osa osa={props.osa.osat[2].nimi} tehtava={props.osa.osat[2].tehtavia}/>
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
            <p>yhteensä {props.osa.osat[0].tehtavia + props.osa.osat[1].tehtavia + props.osa.osat[2].tehtavia} tehtävää</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)