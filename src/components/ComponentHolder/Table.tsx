import React, { Fragment, useMemo } from "react";
import { useTable } from "react-table";
export interface ITableProps {
  data: Array<any>;
  columns: Array<any>;
  classTable?: string;
  headerClassName?: string;
}

export default function Table(props: ITableProps) {
  const columns = useMemo(() => props?.columns, [props?.columns]);
  const data = useMemo(() => props?.data, [props?.data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: columns ? columns : [],
      data: data ? data : [],
    });
  return (
    <Fragment>
      <div
        className={`table-container table-holder ${
          props.classTable ? props.classTable : ""
        } `}
      >
        <table {...getTableProps()}>
          <thead>
            {headerGroups?.map((headerGroup) => {
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup?.headers?.map((column) => {
                    const { key, ...restColumn } = column.getHeaderProps();
                    return (
                      <th key={key} {...restColumn}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows?.map((row) => {
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps();
              return (
                <tr key={key} {...restRowProps}>
                  {row?.cells?.map((cell) => {
                    const { key, ...restCellProps } = cell.getCellProps();
                    return (
                      <td key={key} {...restCellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
