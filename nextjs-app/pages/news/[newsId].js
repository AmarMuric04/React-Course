import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();

  const param = router.query.newsId;

  return <h1>Something important {param}</h1>;
}
