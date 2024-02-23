export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const res = await fetch(`http://localhost:8000/search?q=${q}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const results = await res.json();
  return Response.json({ results });
}
