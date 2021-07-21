import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';

import cookie from 'js-cookie';

const Header = () => {
  const [value, setValue] = useState(1);
  const router = useRouter();
  
  return (
    <header>
      HEADER
      <button onClick={() => setValue(value + 1)}>{value}</button>
      
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/browse"><a>Browse</a></Link>
          {/* <a onClick={() => router.push('/browse')}>Browse</a> */}
        </li>
      </ul>

      <div className="player"><div className="progress"></div></div>
    </header>
  );
};

const Form = () => {

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
          
          // set cookie
          // cookie.set('token', data.token, {expires: 2});
          // Router.push('/');

          console.log(data.token);
          setLoginError('success');
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

const Layout = ({children}) => {

  // const [pageState, setPageState] = useState(false);

  const loggedIn = false;

  return (
    <div>
      
      {loggedIn && (
        <>
          <Header />
          {children}
        </>
      )}

      {!loggedIn && (
        <Form/>
      )}
      
      {/* <button onClick={() => setPageState(true)}>test state</button> */}
    </div>
  )
  
};

export default Layout;
