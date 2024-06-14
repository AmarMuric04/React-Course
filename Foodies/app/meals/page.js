import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <Link href="/meals/share">Share meals!</Link>
      <Link href="/meals/meal-1">Meal one!</Link>
      <Link href="/meals/meal-2">Meal two!</Link>
      <Link href="/meals/meal-3">Meal three!</Link>
    </main>
  );
}
