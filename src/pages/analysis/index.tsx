import type { NextPage } from "next";
import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { getExampleDataUrl } from "api/api";
import { LooseObject } from "interfaces";
import Footer from "components/Footer/Footer";
import Something from "components/Something/Something";
import path from "path";
import fsPromises from "fs/promises";
import { getData, obj } from "api/api";
import AnalysisTable from "../../components/ComponentAnalysic/AnalysisTable";
import style from "../../components/ComponentAnalysic/analysis.module.css";

type AnalysisProps = {
  data: LooseObject;
};

// ---- Call API ----
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

const Analysis: NextPage<AnalysisProps> = ({ data = { text: "Analysis" } }) => {
  return (
    <React.Fragment>
      <main className={style.main}>
        <div className="lm_item_container medium fullw100">
          <div className="lm_content">
            <div className="wrapComponent">
              {/* ---- Analysic ---- */}

              <div className="analysis">
                <div
                  className="text-right fullw100 limit-length notiBody "
                  style={{ marginBottom: 8 }}
                >
                  Currency in {data[obj]?.profile.currency}
                </div>
                <AnalysisTable props={data[obj]?.analysis.earnings_estimate} />
                <AnalysisTable props={data[obj]?.analysis.revenue_estimate} />
                <AnalysisTable props={data[obj]?.analysis.earnings_history} />
                <AnalysisTable props={data[obj]?.analysis.eps_trend} />
                <AnalysisTable props={data[obj]?.analysis.eps_revisions} />
                <AnalysisTable props={data[obj]?.analysis.growth_estimates} />
              </div>

              {/* ----End Analysic ---- */}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Analysis;
