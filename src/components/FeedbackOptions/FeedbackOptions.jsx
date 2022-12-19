import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ buttons, onclickIncrement }) => (
  <>
    <h2>Please leave feedback</h2>;
    {buttons.map(element => (
      <button
        key={Date.now()}
        type="button"
        onClick={() => onclickIncrement(element)}
      >
        {element}
      </button>
    ))}
  </>
);
