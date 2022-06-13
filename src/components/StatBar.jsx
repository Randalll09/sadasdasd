import React, { useContext } from 'react';
import { Stat } from './styles/styled.props';
import { Context } from '../AppContext';

const StatBar = () => {
  const { health, setHealth, happiness, setHappiness } = useContext(Context);
  return (
    <Stat>
      <div>
        <div style={{ width: health + '%' }}></div>
      </div>
      <div>
        <div style={{ width: happiness + '%' }}></div>
      </div>
    </Stat>
  );
};

export default StatBar;
