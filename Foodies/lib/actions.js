"use server";

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
}
