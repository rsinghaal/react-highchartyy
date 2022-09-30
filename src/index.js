import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import App1 from './App1';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';

import App9 from './const1';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App9 />
  </StrictMode>
);
