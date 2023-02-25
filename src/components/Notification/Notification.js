import React from 'react';
import PropTypes from 'prop-types';
import { NotificationMassege } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationMassege>{message}</NotificationMassege>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
