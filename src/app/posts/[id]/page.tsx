import { SinglePostData } from "@/components/post-page/post_data";
import { SinglePostSkeleton } from "@/components/post-page/single_post_skeleton";
import { Suspense } from "react";

export default async function PostData({ params }: { params: { id: string } }) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex flex-col justify-center gap-2 mt-5">
          {new Array(2).fill(null).map((_, index) => (
            <SinglePostSkeleton key={index} />
          ))}
        </div>
      }
    >
      <SinglePostData id={params.id} />
    </Suspense>
  );
}
