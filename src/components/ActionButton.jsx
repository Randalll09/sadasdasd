import React from 'react';
import { ActButton } from './styles/styled.props';

const ActionButton = ({ action, onClick = () => {}, icon }) => {
  const satisfied = `var(--action-btn)`;
  const deprecated = `var(--action-btn-deprecated)`;
  const bgColor = () => (action >= 50 ? satisfied : deprecated);

  return (
    <ActButton bg={bgColor} onClick={onClick}>
      <button>{icon}</button>
    </ActButton>
  );
};

export default ActionButton;
