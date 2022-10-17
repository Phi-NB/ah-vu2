import React from "react";
import { useIntl } from "react-intl";
import Table from "./Table";
import style from "./holder.module.css";
import COLUMNS1 from "../table-transaction/columnTablePurchases";
import COLUMNS2 from "../table-transaction/columnTableReported";
import COLUMNS3 from "../table-transaction/columnTableInstitutional";

export interface IInsiderTransactionProps {
  data: {
    insider_tran_last_six: Array<any>;
    insider_tran_reported: Array<any>;
    insider_tran_purchases: Array<any>;
  };
  currencyString: string;
}

export default function InsiderTransaction(props: IInsiderTransactionProps) {
  const { data, currencyString } = props;
  const data1 = data?.insider_tran_last_six;
  const data2 = data?.insider_tran_reported;
  const data3 = data?.insider_tran_purchases;
  const intl = useIntl();
  return (
    <div>
      <div className={style.titleTable}>
        <p>{intl.formatMessage({ id: "lang_insider_transaction" })}</p>
        <div>
          <span>{intl.formatMessage({ id: "lang_currency_in" })}</span>
          <span>{currencyString}</span>
        </div>
      </div>
      <Table
        data={data1 ? data1 : []}
        columns={COLUMNS1 ? COLUMNS1 : []}
        classTable="insider_tow_table_first"
      />
      <Table
        data={data3 ? data3 : []}
        columns={COLUMNS3 ? COLUMNS3 : []}
        classTable="insider_tow_table_first"
      />
      <Table
        data={data2 ? data2 : []}
        columns={COLUMNS2 ? COLUMNS2 : []}
        classTable="insider_transaction"
      />
    </div>
  );
}
