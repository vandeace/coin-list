import React from "react";
import { Style } from "./style";

const FooterTable = ({
  pageIndex,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageOptions,
  gotoPage,
  nextPage,
  previousPage,
}) => {
  return (
    <Style>
      <button
        className="prev-one"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {"<<"}
      </button>
      <button
        className="prev-one"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {"<"}
      </button>
      <div className="page-count">
        <span>
          {pageIndex !== 0 && <strong>{pageIndex}</strong>}
          <strong className="current">{pageIndex + 1}</strong>
          {pageCount !== pageIndex + 1 && <strong>{pageIndex + 2}</strong>}
        </span>
      </div>
      <button
        className="prev-one"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {">"}
      </button>
      <button
        className="prev-one"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {">>"}
      </button>
    </Style>
  );
};

export default FooterTable;
