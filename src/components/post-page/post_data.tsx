import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/definitions/posts";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function SinglePostData({ id }: { id: string }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!response.ok) redirect("/");

  const data: Post = await response.json();
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Dados do Post (ID #{id})</h3>
        <h3 className="text-md font-semibold">UserID #{data.userId}</h3>
      </div>

      <Card className="hover:bg-secondary">
        <CardHeader>
          <CardTitle>
            Título (<i>title</i>)
          </CardTitle>
        </CardHeader>
        <CardContent>{data.title}</CardContent>
      </Card>

      <Card className="hover:bg-secondary">
        <CardHeader>
          <CardTitle>
            Conteúdo (<i>body</i>)
          </CardTitle>
        </CardHeader>
        <CardContent>{data.body}</CardContent>
      </Card>

      <div className="flex justify-end ">
        <Link href="/">
          <Button>
            <span>Voltar</span>
            <Undo2 />
          </Button>
        </Link>
      </div>
    </div>
  );
}
