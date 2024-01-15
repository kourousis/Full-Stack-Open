import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  console.log(props.all)
  if (props.all != 0) {
    return (
      <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {(props.good - props.bad) / (props.all)}</p>
      <p>positive {props.good / (props.all) * 100} %</p>
      </div>
    )
  }
  return (
    <div>
      No feedback given
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const newGoodClick = good + 1;
    setGood(newGoodClick);
    console.log("good value", newGoodClick);
  };

  const handleNeutralClick = () => {
    const newNeutralClick = neutral + 1;
    setNeutral(newNeutralClick);
    console.log("neutral value", newNeutralClick);
  };

  const handleBadClick = () => {
    const newBadClick = bad + 1;
    setBad(newBadClick);
    console.log("bad value", newBadClick);
  };

  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h1>statistics</h1>
      <Statistics all={all} good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

export default App;
