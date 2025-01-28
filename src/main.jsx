import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter} from 'react-router-dom';
import App from './components/App';
import GlobalState from './components/context';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <GlobalState>
        <App/>
      </GlobalState> 
    </HashRouter>
  </StrictMode>
);
