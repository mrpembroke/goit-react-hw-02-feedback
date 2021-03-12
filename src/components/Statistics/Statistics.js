import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className={s.paragraph}>Good: {good}</p>
    <p className={s.paragraph}>Neutral: {neutral}</p>
    <p className={s.paragraph}>Bad: {bad}</p>
    <p className={s.paragraph}>Total: {total}</p>
    <p className={s.positive}>Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
