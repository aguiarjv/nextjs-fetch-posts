import { Post } from "@/definitions/posts";
import { PostCard } from "./post_card";

export async function PostList({
  page,
  title,
}: {
  page: string;
  title: string;
}) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}&title_like=${title}`,
  );
  const data: Post[] = await response.json();
  return (
    <div className="flex flex-col gap-3">
      {data.map((post) => (
        <PostCard id={String(post.id)} title={post.title} key={post.id} />
      ))}
    </div>
  );
}
