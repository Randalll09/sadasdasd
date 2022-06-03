import { useState } from 'react';
import Actions from './components/Actions';
import './main.scss';
import Wrap from './components/Wrap';
import TopBar from './components/TopBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Wrap>
        <TopBar />
        <Actions />
      </Wrap>
    </div>
  );
}

export default App;
