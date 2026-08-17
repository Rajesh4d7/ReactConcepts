import 'react';
import CounterComponent from './components/CounterComponent';
import PreviousValue from './components/PreviousValue';
import DebounceComponent from './components/DebounceComponent';
import ThrottleComponent from './components/ThrottleComponent';
import ThemeComponent from './components/ThemeComponent';
import ClickOutSideComponent from './components/ClickOutSideComponent';
import './App.css';

const App = () => {
  return (
    <div className="appContainer">
      <CounterComponent />
      <PreviousValue />
      <DebounceComponent/>
      <ThrottleComponent />
      <ThemeComponent />
      <ClickOutSideComponent />
    </div>
  );
}

export default App;