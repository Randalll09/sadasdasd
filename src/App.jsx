import { useState } from 'react';
import Actions from './components/Actions';
import './main.scss';
import Wrap from './components/Wrap';
import TopBar from './components/TopBar';
import AppContext from './AppContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContext>
      <div className="App">
        <Wrap>
          <TopBar />
          <Actions />
        </Wrap>
      </div>
    </AppContext>
  );
}

export default App;
