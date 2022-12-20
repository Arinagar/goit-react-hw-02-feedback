import React from 'react';
// import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <h2>Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total feedbacks: {total}</p>
    <p>
      Positive feedback:
      {positivePercentage}%
    </p>
  </>
);
