import Link from "next/link";

export default function MealPage({ params }) {
  return (
    <main>
      <h1>{params.meal} Meal</h1>
      <Link href="../">Go back!</Link>
    </main>
  );
}
