import { React, Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { XXX } from './XXX';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onclickIncrement = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback.toString();
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    const positivePercent = Math.floor((good / (good + neutral + bad)) * 100);
    return positivePercent;
  };

  showStatistics = () => {
    return this.state.good || this.state.neutral || this.state.bad;
  };

  render() {
    const buttons = Object.keys(this.state);
    return (
      <section>
        <XXX />
        <FeedbackOptions
          buttons={buttons}
          onclickIncrement={this.onclickIncrement}
        />

        {Boolean(this.state.good || this.state.neutral || this.state.bad) && (
          <>
            <h2>Statistics</h2>
            <p>Good: {this.state['good']}</p>
            <p>Neutral: {this.state['neutral']}</p>
            <p>Bad: {this.state['bad']}</p>
            <p>Total feedbacks: {this.countTotalFeedback()}</p>
            <p>
              Positive feedback:
              {this.countPositiveFeedbackPercentage()}%
            </p>
          </>
        )}
      </section>
    );
  }
}
