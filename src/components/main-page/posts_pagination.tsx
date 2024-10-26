import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

export function PostsPagination({
  totalPosts,
  currentPage,
  title,
}: {
  totalPosts: number;
  currentPage: string;
  title: string;
}) {
  const limit = 10;
  const pageNum = Number(currentPage);
  const totalPages = Math.ceil(totalPosts / limit);
  const titleParam = title ? `&title=${title}` : "";

  return (
    <Pagination>
      <PaginationContent>
        {pageNum > 1 && (
          <PaginationItem>
            <PaginationLink href={title ? `/?title=${title}` : "/"}>
              <ChevronsLeft />
            </PaginationLink>
          </PaginationItem>
        )}

        {pageNum > 1 && (
          <PaginationItem>
            <PaginationLink href={`/?page=${pageNum - 1}${titleParam}`}>
              <ChevronLeft />
            </PaginationLink>
          </PaginationItem>
        )}

        {pageNum > 1 && (
          <PaginationItem>
            <PaginationLink href={`/?page=${pageNum - 1}${titleParam}`}>
              {pageNum - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink className="bg-violet-700 hover:bg-violet-700 text-white hover:text-white cursor-default">
            {pageNum}
          </PaginationLink>
        </PaginationItem>

        {pageNum < totalPages && (
          <PaginationItem>
            <PaginationLink href={`/?page=${pageNum + 1}${titleParam}`}>
              {pageNum + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {pageNum < totalPages && (
          <PaginationItem>
            <PaginationLink href={`/?page=${pageNum + 1}${titleParam}`}>
              <ChevronRight />
            </PaginationLink>
          </PaginationItem>
        )}

        {pageNum < totalPages && (
          <PaginationItem>
            <PaginationLink href={`/?page=${totalPages}${titleParam}`}>
              <ChevronsRight />
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
