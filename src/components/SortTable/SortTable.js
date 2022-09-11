import React from "react";
import { useTable, useSortBy } from "react-table";
import "./SortTable.scss";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 10);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
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
      <br />
    </>
  );
}

const SortTable = ({ accounts }) => {
  const columns = React.useMemo(
    () => [
      {
        columns: [
          {
            Header: "Name",
            accessor: accounts.name,
          },
          {
            Header: "Profit & Loss",
            accessor: accounts.profitLoss,
          },
          {
            Header: "Account Type",
            accessor: accounts.type,
          },
        ],
      },
    ],
    []
  );

  return <Table columns={columns} data={accounts} />;
};

export default SortTable;
