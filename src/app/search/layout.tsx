import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { redirectToSearch } from "./actions";
import { Button } from "@/components/ui/button";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-stone-900">
      <header className="w-full flex px-10 py-6 border-b border-white/50 justify-start items-center gap-8">
        <Link
          href={"/"}
          className="font-product-sans font-bold text-3xl text-white"
        >
          PSGoogle
        </Link>
        <div className="relative w-1/2 rounded-full">
          <form action={redirectToSearch}>
            <Button className="absolute top-[10%] right-[1%] bg-transparent hover:bg-stone-700 rounded-full">
              <MagnifyingGlassIcon className="text-white h-5 w-5" />
            </Button>
            <Input
              name="q"
              className="w-full rounded-full text-white border-[0.1px] border-white/50 text-lg bg-stone-800 px-[6%] font-sans py-6"
              type="text"
            />
          </form>
        </div>
      </header>
      <section className="w-full py-10 px-20 flex flex-col justify-center items-start gap-6">
        {children}
      </section>
      <footer className="w-full p-4 border-t border-white/50 flex justify-center items-center">
        <p className="text-white font-sans">
          {"</> by "}
          <Link
            target="_blank"
            className="underline font-bold"
            href="https://github.com/jassuwu"
          >
            jass.
          </Link>
        </p>
      </footer>
    </main>
  );
}
