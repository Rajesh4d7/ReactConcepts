import { StrictMode, useState } from 'react';
import { BrowserRouter, Link, Routes, Route, useLocation } from 'react-router-dom';
import { CustomHooksContainer, ReactHooksContainer} from './hooks';
import ErrorBoundary from './common/components/ErrorBoundary';


const Home = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Test error');
  }

  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={() => setShouldThrow(true)}>Throw error</button>
    </div>
  );
}

const AppRoutes = () => {
  const location = useLocation();

  return (
    <ErrorBoundary key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/custom-hooks" element={<CustomHooksContainer />} />
        <Route path="/react-hooks" element={<ReactHooksContainer />} />
      </Routes>
    </ErrorBoundary>
  );
}

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}> 
          <Link to="/">Home</Link>
          <Link to="/custom-hooks">Custom Hooks</Link>
          <Link to="/react-hooks">React Hooks</Link>
        </nav>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;