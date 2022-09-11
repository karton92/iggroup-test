import React from "react";
import { useTable, useSortBy } from "react-table";

//SCSS & ICONS
import "./SortTable.scss";
import ForwardIcon from "@mui/icons-material/Forward";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const firstPageRows = rows.slice(0, data.length);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {!column.disableSortBy ? (
                      column.isSortedDesc ? (
                        <ForwardIcon className="arrow arrow-down" />
                      ) : (
                        <ForwardIcon className="arrow arrow-up" />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function SortTable({ accounts }) {
  const data = React.useMemo(
    () => [
      {
        col1: "acc",
        col2: "World",
        col3: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
        col3: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "you want",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "you want",
      },
      {
        col1: "acc",
        col2: "World",
        col3: "World",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "col1", // accessor is the "key" in the data
        sortDescFirst: true,
      },
      {
        Header: "Profit & Loss",
        accessor: "col2",
        sortDescFirst: true,
      },
      {
        Header: "Account Type",
        accessor: "col3",
        disableSortBy: true,
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
}

export default SortTable;
