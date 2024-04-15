import { useState } from "react";
const Title = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

const Boton = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <table>
        <tr>
          <th>{text}</th>
        </tr>

        <td>{value}</td>
      </table>
    </>
  );
};
const Statistics = ({
  good,
  neutral,
  bad,
  allFeedbacks,
  avgPoints,
  positiveFeedbacks,
}) => {
  if (allFeedbacks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <>
      <StatisticsLine text={"good"} value={good}></StatisticsLine>
      <StatisticsLine text={"neutral"} value={neutral}></StatisticsLine>
      <StatisticsLine text={"bad"} value={bad}></StatisticsLine>
      <StatisticsLine text={"average"} value={avgPoints}></StatisticsLine>
      <StatisticsLine text={"all"} value={allFeedbacks}></StatisticsLine>
      <StatisticsLine
        text={"positive"}
        value={positiveFeedbacks}
      ></StatisticsLine>
    </>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState([]);

  const clickGood = () => {
    setGood(good + 1);
    setFeedbackCount(feedbackCount.concat(1));
  };

  const clickNeutral = () => {
    setNeutral(neutral + 1);
    setFeedbackCount(feedbackCount.concat(0));
  };

  const clickBad = () => {
    setBad(bad + 1);
    setFeedbackCount(feedbackCount.concat(-1));
  };

  const allFeedbacks = good + neutral + bad;

  let totalScore = 0;
  feedbackCount.forEach((value) => (totalScore += value));
  const avgPoints = totalScore / feedbackCount.length;

  const positiveFeedbacks = (good / allFeedbacks) * 100;

  return (
    <div>
      <Title text={"give feedback"}></Title>
      <Boton handleClick={clickGood} text="GOOD"></Boton>
      <Boton handleClick={clickNeutral} text="NEUTRAL"></Boton>
      <Boton handleClick={clickBad} text="bad"></Boton>
      <Title text={"statistics"}></Title>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allFeedbacks={allFeedbacks}
        avgPoints={avgPoints}
        positiveFeedbacks={positiveFeedbacks}
        feedbackCount={feedbackCount}
      ></Statistics>
    </div>
  );
};

export default App;
