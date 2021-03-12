import './App.css';
import React, { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import NotificationMessage from './components/NotificationMessage/NotificationMessage';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    const PositiveFeedbackPercentage = total
      ? Math.round((good / total) * 100)
      : 0;

    return PositiveFeedbackPercentage;
  };

  onFeedbackIncrement = ({ target }) => {
    console.dir(target);
    const type = target.dataset.action;

    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Pls leave your feedback'}>
          <FeedbackOptions
            options={options}
            onFeedback={this.onFeedbackIncrement}
          ></FeedbackOptions>
        </Section>

        <Section title={'Statistics'}>
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positiveFeedbacks}
            />
          ) : (
            <NotificationMessage message="There is no one feedback yet" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
