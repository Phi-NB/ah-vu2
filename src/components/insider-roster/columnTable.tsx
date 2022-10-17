
import style from "../ComponentHolder/holder.module.css";
import { Tooltip } from "@mui/material";
import { timeConverter, convertValueNumber } from "../../utility";
import { FormattedMessage } from "react-intl";

export interface Row {
    value: number | string
}

interface Accessor {
  individual_or_entity: string,
  title: string
}

const COLUMNS = [
  {
    id: '823798746892',
    Header: <FormattedMessage id="lang_individual_or_entity" />,
    headerClassName: "",
    accessor: (props: Accessor) => {
      return (
        <div className={style.columnFistTableInsider}>
          <p className="mw-paragrap limit-length">
            {props.individual_or_entity
              ? props.individual_or_entity.toUpperCase()
              : "--"}
          </p>
          <p className="mw-paragrap limit-length">{props.title}</p>
        </div>
      );
    },
    Cell: (row: Row) => {
      return (
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
          <div className=" fullw100 mw-paragrap limit-length cell-tow-row">
            {row.value ? row.value : "--"}
          </div>
        </Tooltip>
      );
    },
  },
  {
    Header: <FormattedMessage id="lang_most_recent_transaction" />,
    headerClassName: "",
    accessor: "most_recent_transaction",
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
        title={row.value ? timeConverter(row.value as number) : "--"}
      >
        <div className="fullw100 mw-paragrap limit-length">
          {row.value ? timeConverter(row.value as number) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header:
      <FormattedMessage id="lang_shares_owned_as_of_transaction_date" /> || "",
    headerClassName: "",
    accessor: "shares_owned_as_of_transaction_date",
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
        <div className=" fullw100 mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value as string) : "--"}
        </div>
      </Tooltip>
    ),
  },
];


export default COLUMNS