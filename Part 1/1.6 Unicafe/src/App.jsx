import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => (
  <p>{props.text} {props.value}</p>
)

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

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h1>statistics</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
    </div>
  );
};

export default App;
