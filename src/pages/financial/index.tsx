import type { NextPage } from "next";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { getData, obj } from "api/api";
import { LooseObject } from "interfaces";
import path from "path";
import fsPromises from "fs/promises";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import style from "../../components/ComponentFinancical/financial.module.css";
import IncomeStatement from "../../components/ComponentFinancical/IncomeStatement";
import CashFlow from "../../components/ComponentFinancical/CashFlow";
import BalanceSheet from "../../components/ComponentFinancical/BalanceSheet";
import { useIntl } from "react-intl";

type FinancialProps = {
  data: LooseObject;
  queryString: string;
};

interface IDataSelect {
  target: {
    value: string;
  };
}
// Call API
export const getServerSideProps: GetServerSideProps = async (context) => {
  const symbol = context.query["symbol"];
  const token = context.query["token"];
  const theme = context.query["theme"];

  const filePath = path.join(process.cwd(), "src/json/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  const response = await getData(symbol, token);

  if (response) {
    return { props: { data: response?.data || {} } };
  } else {
    return { props: { data: objectData } };
  }
};

const Financial: NextPage<FinancialProps> = ({
  data = { text: "Financial" },
}) => {
  const intl = useIntl();
  const [displayIcome, setDisplayIcome] = useState<boolean>(true);
  const [displayBalance, setDisplayBalance] = useState<boolean>(false);
  const [displayCash, setDisplayCash] = useState<boolean>(false);
  const [dataSelect, setDataSelect] = useState<string>("Annual");

  const showTabIcome = () => {
    setDisplayIcome(true);
    setDisplayBalance(false);
    setDisplayCash(false);
  };
  const showTabBalance = () => {
    setDisplayIcome(false);
    setDisplayBalance(true);
    setDisplayCash(false);
  };
  const showTabCash = () => {
    setDisplayIcome(false);
    setDisplayBalance(false);
    setDisplayCash(true);
  };

  const getDataSelect = (value: IDataSelect) => {
    setDataSelect(value.target.value);
  };
  return (
    <React.Fragment>
      <main>
        <div className="lm_item_container medium fullw100">
          <div className="lm_content">
            <div className="wrapComponent">
              {/* ---- Financial ---- */}

              <div className="financical">
                <div className={style.financicalTool}>
                  <div className="groupBtn">
                    <button
                      onClick={showTabIcome}
                      className={`groupBtnButton ${
                        displayIcome ? "groupBtnButtonActive" : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_title_icome" })}
                    </button>
                    <button
                      onClick={showTabBalance}
                      className={`groupBtnButton ${
                        displayBalance ? "groupBtnButtonActive" : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_title_balance" })}
                    </button>
                    <button
                      onClick={showTabCash}
                      className={`groupBtnButton ${
                        displayCash ? "groupBtnButtonActive" : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_title_cash_low" })}
                    </button>
                  </div>
                  <div>
                    <Select defaultValue="Annual" onChange={getDataSelect}>
                      <MenuItem value="Annual">
                        {intl.formatMessage({ id: "lang_select_annual" })}
                      </MenuItem>
                      <MenuItem value="Quarterly">
                        {intl.formatMessage({ id: "lang_select_quarterly" })}
                      </MenuItem>
                    </Select>
                  </div>
                </div>
                {displayIcome && (
                  <IncomeStatement
                    titleTable={intl.formatMessage({ id: "lang_title_icome" })}
                    data={data[obj]}
                    queryString={dataSelect}
                  />
                )}
                {displayBalance && (
                  <BalanceSheet
                    titleTable={intl.formatMessage({
                      id: "lang_title_balance",
                    })}
                    data={data[obj]}
                    queryString={dataSelect}
                  />
                )}
                {displayCash && (
                  <CashFlow
                    titleTable={intl.formatMessage({
                      id: "lang_title_cash_low",
                    })}
                    data={data[obj]}
                    queryString={dataSelect}
                  />
                )}
              </div>
              {/* ---- End Financial ---- */}
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Financial;
