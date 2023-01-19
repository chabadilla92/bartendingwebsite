import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import firebaseConfig from './firebase-config';
import { FirebaseAppProvider } from 'reactfire';
import { FirebaseProviders } from './firebase-providers';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <FirebaseProviders>
      <App />
    </FirebaseProviders>
  </FirebaseAppProvider>
);
