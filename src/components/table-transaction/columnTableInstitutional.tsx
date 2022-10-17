
import { Tooltip } from "@mui/material";
import { FormattedMessage } from "react-intl";

export interface Row {
    value: number | string
}

const COLUMNS = [
  {
    Header: <FormattedMessage id="lang_net_institutional_purchases_prior_quarter_to_latest_quarter" />,
    headerClassName: "border-none",
    accessor: "net_institutional_purchases_prior_quarter_to_latest_quarter",
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
    Header: <FormattedMessage id="lang_text_shares" />,
    headerClassName: "border-none",
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
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
];

export default COLUMNS;
