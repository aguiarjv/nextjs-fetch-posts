"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme-toggle";

export function PostSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("title", term);
      params.set("page", "1");
    } else {
      params.delete("title");
      params.set("page", "1");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex relative gap-1">
      <Input
        placeholder="Pesquise o título de um post..."
        className="h-10 pl-14"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("title")?.toString()}
      />
      <Button className="absolute h-10 rounded-r-none pointer-events-none ">
        <Search />
      </Button>
      <ModeToggle />
    </div>
  );
}
