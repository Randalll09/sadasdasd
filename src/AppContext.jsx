import React, { createContext, useState } from 'react';

export const Context = createContext('');

const AppContext = ({ children }) => {
  const [hunger, setHunger] = useState(100);
  const [hygine, setHygine] = useState(100);
  const [sleep, setSleep] = useState(100);
  const [play, setPlay] = useState(100);
  const [love, setLove] = useState(100);
  const [sickness, setSickness] = useState(100);
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);

  return (
    <Context.Provider
      value={{
        hunger,
        setHunger,
        hygine,
        setHygine,
        sleep,
        setSleep,
        play,
        setPlay,
        love,
        setLove,
        sickness,
        setSickness,
        health,
        setHealth,
        happiness,
        setHappiness,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
