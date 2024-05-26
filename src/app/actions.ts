"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  query: z.string().min(1),
});

export async function redirectToSearch(formData: FormData) {
  const validatedFields = schema.safeParse({
    query: formData.get("query"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  redirect(`search?q=${validatedFields.data.query}`);
}

export async function imFeelingLucky(formData: FormData) {
  const validatedFields = schema.safeParse({
    query: formData.get("query"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch(
    `${process.env.SCRAPE_PSGTECH_SERVER}/search?q=${validatedFields.data.query}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await res.json();
  redirect(response.results[0].url);
}
