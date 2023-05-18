import { useState } from 'react';
// import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

// const App = () => {
//   const [username, setUsername] = useState("");
// };
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleClickButton = event => {
    // console.log(e.target.name, e.target.value);
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedbacks = () => {
    console.log(good + neutral + bad);
    return good + neutral + bad;
  };

  const countPositivePercent = () => {
    const total = totalFeedbacks();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const buttonNames = ['good', 'neutral', 'bad'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
        marginLeft: '50px',
        fontSize: 30,
        color: '#black',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonNames}
          onLeaveFeedback={handleClickButton}
        />
      </Section>

      {totalFeedbacks() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks()}
            positivePercentage={countPositivePercent()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

export default App;
