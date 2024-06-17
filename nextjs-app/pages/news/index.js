import { Fragment } from "react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS is a great framework</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}
