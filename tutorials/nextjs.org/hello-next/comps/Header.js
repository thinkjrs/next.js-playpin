/*
 * Header.js
 *
 * A demo component from the nextjs.org shared components tutorial.
 */
import Link from 'next/link';


const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
);

export default Header;
