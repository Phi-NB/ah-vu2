import React, { Fragment, useMemo } from "react";
import style from "./analysis.module.css";

interface ITable {
  props : Array<any>;
}

export default function ProfileTable(props: ITable) {
  const data = useMemo(() => props.props, []);
  const convertText = (value: string) => {
    let c = value.toString().replace(/_/g, " ");
    if (c === "next5 years per annum" || c === "past5 years per annum") {
      const x = c.slice(c.length - 9);
      const y = c.slice(0, c.length - 9);
      c = y + "(" + x + ")";
    }

    if (c === "sales growth year est") {
      const x = c.slice(c.length - 8);
      const y = c.slice(0, c.length - 8);
      const e = "(" + x.slice(0, 4) + "/" + x.slice(5) + ")";
      c = y + e
    }
    if(c === 'surprise') {
      c = c + ' %'
    }
    const a = c.split(" ");
    const b = a.map((item: string) => {
      if (item !== "of") {
        if (
          item === "qtr" ||
          item === "avg" ||
          item === "no" ||
          item === "est"
        ) {
          item = item + ".";
        }
        if (item === "last7" || item === "next5" || item === "past5") {
          item =
            item.substring(0, item.length - 1) +
            "  " +
            item.substring(item.length - 1);
        }
        if (item === "last30") {
          item =
            item.substring(0, item.length - 2) +
            "  " +
            item.substring(item.length - 2);
        }
        if (item === "annum)") {
          return item
        }
        if (item === "eps") {
          item = item.toUpperCase()
        }
          return item.slice(0, 1).toUpperCase().concat(item.substring(1));
      }
      return item;
    });
    return b.join(" ");
  };

  return (
    <Fragment>
      <div className="table-container">
        {/* <ReactTooltip place="bottom" effect="solid" /> */}
        <table className={style.table}>
          <tbody className={style.tbody}>
            {data && Object?.keys(data[0])?.map((key: string, index: number) => (
              <tr key={index}>
                <td className={style.td}>{convertText(key)}</td>
                {data
                  ?.map((element: string) => element[key as unknown as number])
                  ?.map((value: string, index: number) => (
                    <td
                      key={index}
                      className={style.td}
                      // data-tip={value !== null ? value : ""}
                    >
                      <div className="text-right fullw100 mw-paragrap limit-length">
                        {value === null ? "--" : value}
                      </div>
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
