import { useRouter } from 'next/router'

export const Nav = () => {
  const router = useRouter();

  return (
    <div className="nav">
      <ul>
        <li>
          <a onClick={() => router.push('/')}>Home</a>
        </li>
        <li>
          <a onClick={() => router.push('/browse')}>Browse</a>
          {/* <Link href="/browse"><a>Browse</a></Link> */}
        </li>
      </ul>

      <div className="player"><div className="progress"></div></div>
    </div>
  )
}
