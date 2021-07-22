import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import * as styles from "./index.module.scss";

const Header = ({ value, onClick }) => {
  const router = useRouter();
  
  return (
    <header>
      <span className={styles.largeHeading}>HEADER</span>

      <button onClick={onClick}>{value}</button>

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

export default Header; 