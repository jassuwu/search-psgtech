import { GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import RelevanceFeedback from "./components/RelevanceFeedback";

async function getSearchResults(query: string) {
  const res = await fetch(
    `${process.env.SCRAPE_PSGTECH_SERVER}/search?q=${query}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
}

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  if (!searchParams["q"]) {
    return (
      <p className="text-white w-full text-center font-sans text-3xl font-bold">
        search for something there 👆
      </p>
    );
  }

  const query = searchParams["q"];

  const { results }: {results: Array<{ url: string; title: string }> } = await getSearchResults(
    query
  );

  return (
    <>
      <RelevanceFeedback query={query} />
      {results.map((result) => {
        return (
          <div
            key={result.url}
            className="w-full flex flex-col justify-center items-start gap-2 font-sans rounded-md px-2 my-2 hover:underline"
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
                className="text-sm text-cyan-500 underline underline-offset-2 text-ellipsis"
              >
                <p className="truncate w-[270px] md:w-full">{result.url}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
