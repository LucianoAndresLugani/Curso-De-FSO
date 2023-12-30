import { useState } from 'react'
const Display = props => <div><span>{props.op}</span><p>{props.value}</p></div>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll]= useState(0);
  const [average, setAverage]= useState(0)
  const [positive, setPositive]= useState(0);

  const setToGood = (newValue) => {
    setAll(all+1);
    setToAverage();
    setToPositive();
    setGood(newValue)
  }
  const setToNeutral = (newValue) => {
    setAll(all+1)
    setToAverage();
    setToPositive();
    setNeutral(newValue);
  }
  const setToBad = (newValue) => {
    setAll(all+1);
    setToPositive();
    setToAverage();
    setBad(newValue);
  }
  const setToAverage = () => {
    let avg = (good - bad)/all;
    setAverage(avg);
  }
  const setToPositive=()=> {
    let pos = (100*good)/all;
    setPositive(pos);
  }


  return (
    <div>
       <h1>Give Feedback</h1>
      <button onClick={() => setToGood(good + 1)}>
        GOOD
      </button>
      <button onClick={() => setToNeutral(neutral + 1)}>
        NEUTRAL
      </button>
      <button onClick={() => setToBad(bad + 1)}>
        BAD
      </button>
      <h1>Stadistics</h1>
      <Display value={good} op={"GOOD"}>Good</Display>
      <Display value={neutral} op={"NEUTRAL"}>Neutral</Display>
      <Display value={bad} op={"BAD"}>Bad</Display>
      <Display value={all} op={"ALL"}>ALL</Display>
      <Display value={average} op={"AVERAGE"}>Average</Display>
      <Display value={positive+"%"} op={"POSOTIVE"}>Average</Display>
    </div>
  )
}

export default App