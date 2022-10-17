import { Tooltip } from "@mui/material";
import { timeConverter, convertValueNumber, convertPercent } from "utility";
import { FormattedMessage } from "react-intl";

export interface Row {
    value: number | string,
    insider: string,
    title: string
}

const COLUMNS = [
  {
    Header: <FormattedMessage id="lang_text_holders" />,
    headerClassName: "",
    accessor: "holder",
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
        <div className=" mw-paragrap limit-length ">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: <FormattedMessage id="lang_text_shares" />,
    headerClassName: "",
    accessor: "shares",
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
        title={row.value ? convertValueNumber(row.value as string) : "--"}
      >
        <div className=" mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value as string) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: <FormattedMessage id="lang_text_date_reported" />,
    headerClassName: "",
    accessor: "date_reported",
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
        title={row.value ? timeConverter(row.value as number) : "--"}
      >
        <div className=" mw-paragrap limit-length">
          {row.value ? timeConverter(row.value as number) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: <FormattedMessage id="lang_text_out" />,
    headerClassName: "",
    accessor: "out",
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
        title={row.value ? convertPercent(row.value) : "--"}
      >
        <div className=" mw-paragrap limit-length">
          {row.value ? convertPercent(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: <FormattedMessage id="lang_value" />,
    headerClassName: "",
    accessor: "value",
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
        title={row.value ? convertValueNumber(row.value as string) : "--"}
      >
        <div className=" mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value as string) : "--"}
        </div>
      </Tooltip>
    ),
  },
];

export default COLUMNS;
