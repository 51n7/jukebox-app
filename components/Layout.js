import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

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

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
