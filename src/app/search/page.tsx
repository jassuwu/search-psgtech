import { GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

async function getSearchResults(query: string) {
  const res = await fetch(`http://localhost:8000/search?q=${query}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  if (!searchParams["q"]) {
    return (
      <p className="text-white font-sans text-2xl">
        Please enter a query to search
      </p>
    );
  }

  const results: Array<{ url: string; title: string }> = await getSearchResults(
    searchParams["q"]
  );

  return (
    <>
      {results.map((result) => {
        return (
          <div
            key={result.url}
            className="w-full flex flex-col justify-start items-start gap-2 font-sans rounded-md px-2 my-2 gap-2 hover:underline"
          >
            <Link
              className="text-white font-sans text-md hover:underline"
              href={result.url}
            >
              {result.title}
            </Link>
            <div className="flex justify-center items-center gap-1">
              <GlobeIcon className="h-4 w-4 text-cyan-500" />
              <Link
                href={result.url}
                className="text-sm text-cyan-500 underline underline-offset-2"
              >
                {result.url}
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
