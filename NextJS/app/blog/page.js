import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>The blog</h1>
      <p>
        <Link href="/blog/post-1">First post</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Second post</Link>
      </p>
    </main>
  );
}
