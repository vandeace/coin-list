import FooterTable from '../FooterTable';
import Image from 'next/image';
import React, { useEffect } from 'react';
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useTable,
} from 'react-table';
import useDebounce from '../../utils/Debounce';
import { Style } from './style';
import Link from 'next/link';
import GlobalFilter from '../../utils/GlobalFilter';

const TableUniversal = ({ columns, data, action, loading }) => {
  const [value, setValue] = useDebounce(5, 1000);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        if (JSON.stringify(action) != '{}') return [...columns, action];
        else return [...columns];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    pageCount,
    state,
    prepareRow,
    setGlobalFilter,
  } = tableInstance;

  const { pageIndex, globalFilter } = state;

  useEffect(() => {
    setPageSize(5);
  }, []);

  return (
    <Style>
      <div className='table'>
        <h5>Coin List</h5>
        <div className='header'>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className='table-data'>
          <div>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render('Header')} <div></div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              {data.length > 0 ? (
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <Link href={`coins/${row.original.id}`}>
                        <tr {...row.getRowProps()} className='table-row'>
                          {row.cells.map((cell, index) => {
                            return <td key={index}>{cell.render('Cell')}</td>;
                          })}
                        </tr>
                      </Link>
                    );
                  })}
                </tbody>
              ) : (
                <tbody {...getTableBodyProps()}>
                  <tr>
                    <td colSpan={'100%'}>
                      <p style={{ textAlign: 'center' }}>Data Not Found</p>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
          {data.length > 0 && !loading ? (
            <>
              <FooterTable
                pageIndex={pageIndex}
                pageCount={pageCount}
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                pageOptions={pageOptions}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Style>
  );
};

export default TableUniversal;
