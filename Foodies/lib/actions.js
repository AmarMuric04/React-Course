"use server";

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text.title || text.title.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(title.creator) ||
    isInvalidText(title.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "invalid input." };
  }
  await saveMeal(meal);
  redirect("/meals");
}
