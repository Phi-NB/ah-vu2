
import { Tooltip } from "@mui/material";
import { FormattedMessage } from "react-intl";

export interface Row {
    value: number | string
}

const COLUMNS = [
  {
    Header: <FormattedMessage id="lang_description" />,
    headerClassName: "border-none",
    accessor: "description",
    Cell: (row: Row) => (
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
        <div className=" fullw100 mw-paragrap limit-length">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: <FormattedMessage id="lang_value" />,
    headerClassName: "border-none",
    accessor: "percent_shares",
    Cell: (row: Row) => (
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
        <div className=" fullw100 mw-paragrap limit-length">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: "",
    accessor: "1",
    headerClassName: "border-none",
    Cell: (row: Row) => (
      <div className=" fullw100 mw-paragrap limit-length">
        {row.value ? row.value : ""}
      </div>
    ),
  },
  {
    Header: "",
    accessor: "2",
    headerClassName: "border-none",
    Cell: (row: Row) => (
      <div className=" fullw100 mw-paragrap limit-length">
        {row.value ? row.value : ""}
      </div>
    ),
  },
  {
    Header: "",
    accessor: "3",
    headerClassName: "border-none",
    Cell: (row: Row) => (
      <div className=" fullw100 mw-paragrap limit-length">
        {row.value ? row.value : ""}
      </div>
    ),
  },
];

export default COLUMNS;
