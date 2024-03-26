"use server";

import { RedirectType, redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  query: z.string().min(1),
});

export async function redirectToSearch(formData: FormData) {
  const validatedFields = schema.safeParse({
    query: formData.get("q"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  redirect(`search?q=${validatedFields.data.query}`, RedirectType.push);
}

export async function relevanceFeedback(query: string, feedback: -1 | 1) {
  const result = await fetch(`${process.env.SCRAPE_PSGTECH_SERVER}/feedback`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      feedback,
    }),
  })

  return result.json()
}
