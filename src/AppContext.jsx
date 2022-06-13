import React, { createContext, useState } from 'react';
import useInterval from './utils/useInterval';

export const Context = createContext('');

const AppContext = ({ children }) => {
  const [whichNeeds, setWhichNeeds] = useState(0);
  const [hunger, setHunger] = useState(100);
  const [hygine, setHygine] = useState(100);
  const [sleep, setSleep] = useState(100);
  const [play, setPlay] = useState(100);
  const [love, setLove] = useState(100);
  const [sickness, setSickness] = useState(100);
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);

  const decreaseNeeds = (setAction, action) => {
    if (action > 0) {
      setAction((prev) => prev - 1);
    }
  };
  const handleStat = () => {
    setHappiness(parseInt((play + love + hygine) / 3));
    setHealth(parseInt((hunger + sleep + sickness) / 3));
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useInterval(() => {
    let randomNeeds = getRandomInt(6);
    switch (randomNeeds) {
      case 0:
        decreaseNeeds(setHunger, hunger);
        break;
      case 1:
        decreaseNeeds(setHygine, hygine);
        break;
      case 2:
        decreaseNeeds(setSleep, sleep);
        break;
      case 3:
        decreaseNeeds(setPlay, play);
        break;
      case 4:
        decreaseNeeds(setLove, love);
        break;
      case 5:
        decreaseNeeds(setSickness, sickness);
        break;
    }
    handleStat();
  }, 300);

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
