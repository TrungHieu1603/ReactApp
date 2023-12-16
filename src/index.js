import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-204glcsb5pfj4zw3.us.auth0.com"
    clientId="sxz0HSx3g24pEkJ1F3YHsjpsm2AO5SQQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
    <App />
    </Auth0Provider>
 
);



