import React from 'react';
import { useIntl } from "react-intl";
import style from "./financial.module.css";

export interface INoDataProps {
}

export default function NoData (props: INoDataProps) {
  const intl = useIntl();
  return (
    <div className={style.noDataContainer}>
      <p>{intl.formatMessage({ id: "lang_no_data" })}</p>
    </div>
  );
}
