import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { imFeelingLucky, redirectToSearch } from "./actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-stone-900">
      <footer className="w-full p-4 border-t border-white/50 flex justify-center items-center">
        <p className="text-white font-bold font-sans"></p>
      </footer>
      <form className="w-full">
        <section className="flex flex-col justify-center items-center w-full gap-8">
          <p className="font-product-sans font-bold text-8xl text-white">
            PSGoogle
          </p>
          <div className="relative w-2/6 rounded-full">
            <MagnifyingGlassIcon className="absolute top-[30%] left-[2%] text-white h-5 w-5" />
            <Input
              name="query"
              className="w-full rounded-full text-white border-[0.1px] border-white/50 text-lg bg-stone-900 px-[6%] font-sans py-6"
              type="text"
            />
          </div>
          <div className="w-full flex justify-center items-center gap-4">
            <Button
              formAction={redirectToSearch}
              className="bg-stone-800 hover:outline hover:outline-[0.1px] hover:bg-stone-700"
            >
              {"PSGoogle Search"}
            </Button>
            <Button
              formAction={imFeelingLucky}
              className="bg-stone-800 hover:outline hover:outline-[0.1px] hover:bg-stone-700"
            >
              {"I'm Feeling Lucky"}
            </Button>
          </div>
          <p className="text-white font-sans text-sm">
            <span className="font-bold">PSGoogle offered in:</span>{" "}
            <span className="underline underline-offset-2">
              Absolutely every language on the planet. (Given that it exists in
              the psgtech.edu website)
            </span>
          </p>
        </section>
      </form>
      <footer className="w-full p-4 border-t border-white/50 flex justify-center items-center">
        <p className="text-white font-sans">
          {"Built by AK and "}
          <Link
            target="_blank"
            className="underline font-bold"
            href="https://github.com/jassuwu"
          >
            jass
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
