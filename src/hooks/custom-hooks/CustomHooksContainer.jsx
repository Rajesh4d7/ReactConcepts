import 'react';
import CounterComponent from './components/CounterComponent';
import PreviousValue from './components/PreviousValue';
import DebounceComponent from './components/DebounceComponent';
import ThrottleComponent from './components/ThrottleComponent';
import ThemeComponent from './components/ThemeComponent';
import ClickOutSideComponent from './components/ClickOutSideComponent';
import FetchDataComponent from './components/FetchDataComponent';
import PaginationComponent from './components/PaginationComponent';
import EventListenerComponent from './components/EventListenerComponent';
import UserRegistrationForm from './components/UserRegistrationForm';
import WebSocketComponent from './components/WebSocketComponent';
import './CustomHooksContainer.css';

const CustomHooksContainer = () => {
  return (
    <div>
       <h2>Custom Hooks</h2>
        <div className="hooksContainer">
          <CounterComponent />
          <PreviousValue />
          <DebounceComponent/>
          <ThrottleComponent />
          <ThemeComponent />
          <ClickOutSideComponent />
          <FetchDataComponent />
          <EventListenerComponent />
          <PaginationComponent />
          <UserRegistrationForm />
          <WebSocketComponent />
        </div>
    </div>
  );
}

export default CustomHooksContainer;