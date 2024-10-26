import Link from "next/link";
import { Card, CardHeader, CardTitle } from "../ui/card";

export function PostCard({ id, title }: { id: string; title: string }) {
  return (
    <Link href={`/posts/${id}`}>
      <Card className="hover:bg-violet-600 hover:text-white">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
