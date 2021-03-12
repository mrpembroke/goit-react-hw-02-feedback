import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationMessage({ message }) {
  return <p>{message}</p>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
