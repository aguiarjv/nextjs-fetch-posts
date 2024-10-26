import { PostList } from "./posts_list";
import { PostsPagination } from "./posts_pagination";
import { PostSearch } from "./posts_search";

export async function PostMainPage({
  title,
  page,
}: {
  title: string;
  page: string;
}) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=1&title_like=${title}`,
  );
  const totalPosts = Number(response.headers.get("x-total-count"));
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="w-full flex flex-col gap-3 justify-center">
      <PostSearch />
      <PostList page={page} title={title} />
      <PostsPagination
        totalPosts={totalPosts}
        currentPage={page}
        title={title}
      />
    </div>
  );
}
