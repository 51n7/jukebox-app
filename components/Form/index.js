import { useState } from "react";
import fetch from 'isomorphic-unfetch';

const Form = ({ onLogin }) => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    // call api
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      if (data && data.error) {
        setLoginError(data.message);
      }
      if (data && data.token) {
        onLogin(data.token);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Send</button>

      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
    </form>
  );
}

export default Form;