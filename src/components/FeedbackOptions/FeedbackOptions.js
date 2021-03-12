import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedback }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        data-action={option}
        onClick={onFeedback}
        className={s.button}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
