import logo from './logo.svg';
import './App.css';

import Tooltip from './components/Tooltip';

const Content = () => {
  return (
    <div>
      <span style={{ color: 'red', fontWeight: 'bold' }}>
                Tooltipに表示させたい内容をここに記述します
                </span>
    </div>
  );
};

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
          <Tooltip
            content={
              <Content />
            }
            location="right"
            >
            <button>ToolTip</button>
          </Tooltip>
          <div>ここから文章は続きます。</div>
        </div>
    </div>
  );
}

export default App;
