import { useState } from 'react'
const Display = props => <div><span>{props.op}</span><p>{props.value}</p></div>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  
  return (
    <div>
       <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        GOOD
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        NEUTRAL
      </button>
      <button onClick={() => setBad(bad + 1)}>
        BAD
      </button>
      <h1>Stadistics</h1>
      <Display value={good} op={"GOOD"}>Good</Display>
      <Display value={neutral} op={"NEUTRAL"}>Neutral</Display>
      <Display value={bad} op={"BAD"}>Bad</Display>
    </div>
  )
}

export default App