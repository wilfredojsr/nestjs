import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
      <GoogleOAuthProvider clientId='YOUR_CLIENT_ID'>
        <GoogleLogin
            buttonText='Login'
            onSuccess={(response) => {
              fetch('http://localhost:3000/authentication/google', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  token: response.credential
                }),
              }).then(response => response.json()).then((data) => console.log(data));
            }}
        />
      </GoogleOAuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
