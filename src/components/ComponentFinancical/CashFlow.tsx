import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./financial.module.css";
import Paper from "@mui/material/Paper";
import { TreeDataState, CustomTreeData } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
} from "@devexpress/dx-react-grid-material-ui";
import { useIntl } from "react-intl";
import { Tooltip } from "@mui/material";
import { FormattedMessage } from "react-intl";
import getDataTable from "./convertDataCashFlow";
import getDataColumns from "./columnIncome";
import NoData from "./NoData";
import { deleteItemNullIcomeCashFlow } from "../../utility/index";

const ic_expand = require("../../../public/asset/icon/expand.svg");
const ic_collapse = require("../../../public/asset/icon/collapse.svg");

export interface ICashFlowProps {
  data: {
    profile: { financial_currency: string };
    financials: {
      cashflow: [];
      cashflow_ttm: [];
      cashflow_quarterly: [];
      cashflow_quarterly_ttm: [];
    };
  };
  titleTable: string;
  queryString: string;
}

interface TableCellProps {
  value: any;
  row: any;
  column: {
    name: string;
  };
  tableRow: {
    key: string;
    type: symbol;
  };
  tableColumn: {
    key: string;
    type: symbol;
  };
}

function CashFlow(props: ICashFlowProps) {
  const { data, titleTable, queryString } = props;
  const [expandedRowIds, setExpandenRowIds] = useState<any>([]);
  const intl = useIntl();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const getChildRows = (row: any, rootRows: any) => {
    return row ? row.items : rootRows;
  };

  const [tableColumnExtensions] = useState([
    { columnName: "name", width: 800 },
  ]);

  const [allOpen, setAllOpen] = useState(false);
  const expandAll = () => {
    setAllOpen(true);
    let arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(i);
    }
    setExpandenRowIds(arr);
  };
  const collapseAll = () => {
    setAllOpen(false);
    setExpandenRowIds([]);
  };

  if (queryString === "Annual") {
    if (
      data?.financials?.cashflow.length === 0 &&
      data?.financials?.cashflow_ttm.length === 0
    ) {
      return <NoData />;
    }
  } else {
    if (
      data?.financials?.cashflow_quarterly.length === 0 &&
      data?.financials?.cashflow_quarterly_ttm.length === 0
    ) {
      return <NoData />;
    }
  }
  const Cell = ({ row, column, ...props }: TableCellProps) => {
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
        title={props.value}
      >
        {mounted ? (
          <div className="cell">
            <Table.Cell {...props} row={row} column={column} />
          </div>
        ) : (
          <Table.Cell
            tableColumn={{ key: "", type: Symbol("") }}
            tableRow={{ key: "", type: Symbol("") }}
            value=""
            row={[]}
            column={{ name: "" }}
          />
        )}
      </Tooltip>
    );
  };

  return (
    <div className={style.financicalInfoWrapContent}>
      <div className={style.financicalInfoTable}>
        <div className={style.financicalInfo}>
          <div className={style.financicalInfoIncome}>{titleTable}</div>
          <div className={style.financicalInfoFinancial}>
            <span>
              <FormattedMessage id="lang_currency_in" />
            </span>
            {data?.profile.financial_currency}
            <span>
              <FormattedMessage id="lang_all_numbers" />
            </span>
          </div>
        </div>
        {allOpen ? (
          <button
            className={style.financicalInfoTableBtnEpCo}
            onClick={collapseAll}
          >
            <Image src={ic_expand} width={12} height={12} />
            <span style={{ marginLeft: 12 }}>
              <FormattedMessage id="lang_collapse" />
            </span>
          </button>
        ) : (
          <button
            className={style.financicalInfoTableBtnEpCo}
            onClick={expandAll}
          >
            <Image src={ic_collapse} width={12} height={12} />
            <span style={{ marginLeft: 12 }}>
              <FormattedMessage id="lang_expand" />
            </span>
          </button>
        )}
      </div>
      <Paper>
        {/* <Grid
          rows={deleteItemNullIcomeCashFlow(getDataTable(data, queryString))}
          columns={getDataColumns(
            queryString === "Annual"
              ? data.financials.cashflow
              : data.financials.cashflow_quarterly
          )}
        >
          <TreeDataState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={setExpandenRowIds}
          />
          <CustomTreeData getChildRows={getChildRows} />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow />
          <TableTreeColumn cellComponent={Cell} for="breakDown" />
        </Grid> */}
      </Paper>
    </div>
  );
}

export default CashFlow;
