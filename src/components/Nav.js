// components/Nav.js
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      {/* <ul>
        <li> */}
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        {/* <li>
      </ul> */}
    </nav>
  );
}
