import React from 'react';
import { ActButton } from './styles/styled.props';

const ActionButton = ({ action, onClick = () => {}, icon }) => {
  return (
    <ActButton onClick={onClick}>
      <button>{icon}</button>
    </ActButton>
  );
};

export default ActionButton;
