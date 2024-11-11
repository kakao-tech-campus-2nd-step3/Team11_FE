import React from 'react';

import { Box, Button, ButtonGroup } from '@chakra-ui/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const maxPageButtons = 9;
  let startPage = Math.max(currentPage - 4, 1);
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

  if (endPage - startPage < maxPageButtons - 1) {
    startPage = Math.max(endPage - maxPageButtons + 1, 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Box mt={8} textAlign="center">
      <ButtonGroup>
        {startPage > 1 && (
          <>
            <Button onClick={() => onPageChange(1)}>1</Button>
            <Button isDisabled>...</Button>
          </>
        )}
        {pageNumbers.map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            variant={page === currentPage ? 'solid' : 'outline'}
          >
            {page}
          </Button>
        ))}
        {endPage < totalPages && (
          <>
            <Button isDisabled>...</Button>
            <Button onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </Button>
          </>
        )}
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
