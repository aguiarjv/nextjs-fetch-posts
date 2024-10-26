import { PostMainPage } from "@/components/main-page/posts_main";
import { PostsSkeleton } from "@/components/main-page/posts_skeleton";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string; title: string };
}) {
  const page = searchParams.page ? searchParams.page : "1";
  const title = searchParams.title ? searchParams.title : "";

  return (
    <Suspense
      fallback={
        <div className="space-y-3 mx-auto mt-8">
          {new Array(10).fill(null).map((_, index) => (
            <PostsSkeleton key={index} />
          ))}
        </div>
      }
    >
      <PostMainPage title={title} page={page} />
    </Suspense>
  );
}
