import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a style={{ marginRight: "10px" }}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ marginRight: "10px" }}>About</a>
      </Link>
      <Link href="/posts" legacyBehavior>
        <a style={{ marginRight: "10px" }}>Posts</a>
      </Link>
      <Link href="/posts/featured-posts" legacyBehavior>
        <a style={{ marginRight: "10px" }}>Featured</a>
      </Link>
    </nav>
  );
}
