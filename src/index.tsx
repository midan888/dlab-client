import 'normalize.css/normalize.css';
import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';
import { init as crashReport } from './core/crashReport';

crashReport();

const rootElement = document.getElementById('root');
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
