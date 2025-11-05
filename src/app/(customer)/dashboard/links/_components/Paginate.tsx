import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
export default function Paginate() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious size='sm' href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink size='sm' href='#'>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext size='sm' href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
