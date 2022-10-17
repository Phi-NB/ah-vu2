import { Tooltip } from "@mui/material";

interface Row {
  value: number | string
}

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
    Cell: (row : Row) => (
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "14px",
              padding: "8px",
              bgcolor: "#363C4E",
              color: "#EEF0F1",
              border: "1px solid #363C4E",
            },
          },
        }}
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: "Title",
    accessor: "title",
    Cell: (row : Row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: "Pay",
    headerClassName: "text-right",
    accessor: "pay",
    Cell: (row : Row) => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: "Excercised",
    headerClassName: "text-right",
    accessor: "exercised",
    Cell: (row : Row) => (
      <div className="text-right fullw100 limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: "Year Born",
    headerClassName: "text-right",
    accessor: "year_born",
    Cell: (row : Row) => (
      <div className="text-right fullw100 limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
];

export default COLUMNS