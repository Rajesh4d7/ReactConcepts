import 'react';
import { StrictMode } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { HooksContainer, ReactHooksContainer} from './hooks';

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}> 
          <Link to="/custom-hooks">Custom Hooks</Link>
          <Link to="/react-hooks">React Hooks</Link>
        </nav>
        <Routes>
          <Route path="/custom-hooks" element={<HooksContainer />} />
          <Route path="/react-hooks" element={<ReactHooksContainer />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;