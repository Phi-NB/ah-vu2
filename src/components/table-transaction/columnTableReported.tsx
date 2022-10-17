
import style from "../ComponentHolder/holder.module.css";
import { Tooltip } from "@mui/material";
import { timeConverter, convertValueNumber } from "utility";
import { FormattedMessage } from "react-intl";

export interface Row {
    value: number | string,
    insider: string,
    title: string
}

const COLUMNS = [
  {
    id: "82379874689347934892",
    Header: <FormattedMessage id="lang_insider" />,
    headerClassName: "",
    accessor: (props: Row) => {
      return (
        <div className={style.columnFistTableInsider}>
          <p className="mw-paragrap limit-length">
            {props.insider.toUpperCase()}
          </p>
          <p className="mw-paragrap limit-length">{props.title}</p>
        </div>
      );
    },
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
        <div className="mw-paragrap limit-length cell-tow-row">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: <FormattedMessage id="lang_transaction" />,
    headerClassName: "",
    accessor: "transaction",
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
        <div className="mw-paragrap limit-length">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: <FormattedMessage id="lang_type" />,
    headerClassName: "",
    accessor: "type",
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
        <div className="mw-paragrap limit-length">
          {row.value ? row.value : "--"}
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
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value as string) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: <FormattedMessage id="lang_date" />,
    headerClassName: "",
    accessor: "date",
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
        <div className="mw-paragrap limit-length">
          {row.value ? timeConverter(row.value as number) : "--"}
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
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value as string) : "--"}
        </div>
      </Tooltip>
    ),
  },
];

export default COLUMNS;
