import logo from './logo.svg';
import './App.css';

import Tooltip from './components/Tooltip';

function App() {
  return (
    <div
      style={{
        width: '500px',
        margin: '0 auto',
      }}
      >
        <h1>Reactで初めてのTooltip実装</h1>
        <div>
          <Tooltip>
            <button>ToolTip</button>
          </Tooltip>
        </div>
    </div>
  );
}

export default App;
