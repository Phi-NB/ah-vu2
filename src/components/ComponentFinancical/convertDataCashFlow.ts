import { convertValue } from "../../utility/index";

const getDataTable = (propsData: any, queryString: string) => {
  let data: { [x: string]: any }[] = [];
  let data_ttm: { [x: string]: any }[] = [];
  if (queryString === "Annual") {
    (data = propsData?.financials?.cashflow),
      (data_ttm = propsData?.financials?.cashflow_ttm);
  } else {
    data = propsData?.financials?.cashflow_quarterly;
    data_ttm = propsData?.financials?.cashflow_quarterly_ttm;
  }

  const arrTree = [
    {
      title: "Cash Flows from Used in Operating Activities Direct",
      key: "cash_flowsfromusedin_operating_activities_direct",
      items: [
        {
          title: "Classes of Cash Receipts from Operating Activities",
          key: "classesof_cash_receiptsfrom_operating_activities",
          items: [
            {
              title: "Cash Receipts from Depositsby Banks & Customers",
              key: "cash_receiptsfrom_depositsby_banksand_customers",
            },
            {
              title: "Other Cash Receipts from Operating Activities",
              key: "other_cash_receiptsfrom_operating_activities",
            },
            {
              title: "Receipts from Customers",
              key: "receiptsfrom_customers",
            },
            {
              title: "Receipts from Government Grants",
              key: "receiptsfrom_government_grants",
            },
          ],
        },
        {
          title: "Dividends Received Direct",
          key: "dividends_received_direct",
        },
        {
          title: "Interest Received Direct",
          key: "interest_received_direct",
        },
        {
          title: "Taxes Refund Paid Direct",
          key: "taxes_refund_paid_direct",
        },
        {
          title: "Classes of Cash Payments",
          key: "classesof_cash_payments",
          items: [
            {
              title: "Cash Payments for Depositsby Banks & Customers",
              key: "cash_paymentsfor_depositsby_banksand_customers",
            },
            {
              title: "Other Cash Payments from Operating Activities",
              key: "other_cash_paymentsfrom_operating_activities",
            },
            {
              title: "Payments to Suppliers for Goods & Services",
              key: "paymentsto_suppliersfor_goodsand_services",
            },
            {
              title: "Operating Cash Flow",
              key: "operating_cash_flow",
              items: [
                {
                  title: "Cash Flow from Continuing Operating Activities",
                  key: "cash_flow_from_continuing_operating_activities",
                },
                {
                  title: "Net Income from Continuing Operations",
                  key: "net_income_from_continuing_operations",
                },
                {
                  title: "Operating Gains Losses",
                  key: "operating_gains_losses",
                },
                {
                  title: "Depreciation Amortization Depletion",
                  key: "depreciation_amortization_depletion",
                },
                {
                  title: "Asset Impairment Charge",
                  key: "asset_impairment_charge",
                },
                {
                  title: "Other non-cash items",
                  key: "other_non_cash_items",
                },
                {
                  title: "Change in working capital",
                  key: "change_in_working_capital",
                },
                {
                  title: "Dividend Received CFO",
                  key: "dividend_received_cfo",
                },
                {
                  title: "Interest Paid CFO",
                  key: "interest_paid_cfo",
                },
                {
                  title: "Interest Received CFO",
                  key: "interest_received_cfo",
                },
                {
                  title: "Taxes Refund Paid",
                  key: "taxes_refund_paid",
                },
              ],
            },
          ],
        },
        {
          title: "Cash from Discontinued Operating Activities",
          key: "cash_from_discontinued_operating_activities",
        },
      ],
    },
    {
      title: "Investing Cash Flow",
      key: "investing_cash_flow",
      items: [
        {
          title: "Cash Flow from Continuing Investing Activities",
          key: "cash_flow_from_continuing_investing_activities",
        },
        {
          title: "Capital Expenditure Reported",
          key: "capital_expenditure_reported",
        },
        {
          title: "Net PPE Purchase And Sale",
          key: "net_ppe_purchase_and_sale",
          items: [
            {
              title: "Purchase of PPE",
              key: "purchase_of_ppe",
            },
            {
              title: "Sale of PPE",
              key: "sale_of_ppe",
            },
          ],
        },
        {
          title: "Net Investment Purchase And Sale",
          key: "net_investment_purchase_and_sale",
          items: [
            {
              title: "Purchase of Investment",
              key: "purchase_of_investment",
            },
            {
              title: "Sale of Investment",
              key: "sale_of_investment",
            },
          ],
        },
        {
          title: "Net Business Purchase And Sale",
          key: "net_business_purchase_and_sale",
          items: [
            {
              title: "Sale of Business",
              key: "sale_of_business",
            },
            {
              title: "Purchase of Business",
              key: "purchase_of_business",
            },
          ],
        },
        {
          title: "Dividends Received CFI",
          key: "dividends_received_cfi",
        },
        {
          title: "Net Other Investing Changes",
          key: "net_other_investing_changes",
        },
        {
          title: "Net Intangibles Purchase And Sale",
          key: "net_intangibles_purchase_and_sale",
        },
        {
          title: "Purchase of Intangibles",
          key: "purchase_of_intangibles",
        },
      ],
    },
    {
      title: "Financing Cash Flow",
      key: "financing_cash_flow",
      items: [
        {
          title: "Cash Flow from Continuing Financing Activities",
          key: "cash_flow_from_continuing_financing_activities",
        },
        {
          title: "Net Issuance Payments of Debt",
          key: "net_issuance_payments_of_debt",
        },
        {
          title: "Net Long Term Debt Issuance",
          key: "net_long_term_debt_issuance",
          items: [
            {
              title: "Long Term Debt Issuance",
              key: "long_term_debt_issuance",
            },
            {
              title: "Long Term Debt Payments",
              key: "long_term_debt_payments",
            },
          ],
        },
        {
          title: "Net Common Stock Issuance",
          key: "net_common_stock_issuance",
          items: [
            {
              title: "Common Stock Payments",
              key: "common_stock_payments",
            },
            {
              title: "Common Stock Issuance",
              key: "common_stock_issuance",
            },
          ],
        },
        {
          title: "Cash Dividends Paid",
          key: "cash_dividends_paid",
          items: [
            {
              title: "Common Stock Dividend Paid",
              key: "common_stock_dividend_paid",
            },
          ],
        },
        {
          title: "Net Other Financing Charges",
          key: "net_other_financing_charges",
        },
        {
          title: "Interest Paid CFF",
          key: "interest_paid_cff",
        },
      ],
    },
    {
      title: "End Cash Position",
      key: "end_cash_position",
      items: [
        {
          title: "Changes in Cash",
          key: "changes_in_cash",
        },
        {
          title: "Effect of Exchange Rate Changes",
          key: "effect_of_exchange_rate_changes",
        },
        {
          title: "Beginning Cash Position",
          key: "beginning_cash_position",
        },
      ],
    },
    {
      title: "Issuance of Debt",
      key: "issuance_of_debt",
    },
    {
      title: "Repayment of Debt",
      key: "repayment_of_debt",
    },
    {
      title: "Repurchase of Capital Stock",
      key: "repurchase_of_capital_stock",
    },
    {
      title: "Free Cash Flow",
      key: "free_cash_flow",
    },
    {
      title: "Income Tax Paid Supplemental Data",
      key: "income_tax_paid_supplemental_data",
    },
    {
      title: "Capital Expenditure",
      key: "capital_expenditure",
    },
    {
      title: "Issuance of Capital Stock",
      key: "issuance_of_capital_stock",
    },
  ];

  const convertArr = (arr1: any) => {
    return arr1.map((item: any) => {
      if (item.items && item.items.length !== 0) {
        return {
          breakDown: item.title,
          ttm:
            data_ttm && data_ttm[0] && data_ttm[0][item.key]
              ? convertValue(data_ttm[0][item.key])
              : "--",
          reported_time_display3:
            data && data[3] && data[3][item.key]
              ? convertValue(data[3][item.key])
              : "--",
          reported_time_display2:
            data && data[2] && data[2][item.key]
              ? convertValue(data[2][item.key])
              : "--",
          reported_time_display1:
            data && data[1] && data[1][item.key]
              ? convertValue(data[1][item.key])
              : "--",
          reported_time_display0:
            data && data[0] && data[0][item.key]
              ? convertValue(data[0][item.key])
              : "--",
          items: convertArr(item.items),
        };
      }

      return {
        breakDown: item.title,
        ttm:
          data_ttm && data_ttm[0] && data_ttm[0][item.key]
            ? convertValue(data_ttm[0][item.key])
            : "--",
        reported_time_display3:
          data && data[3] && data[3][item.key]
            ? convertValue(data[3][item.key])
            : "--",
        reported_time_display2:
          data && data[2] && data[2][item.key]
            ? convertValue(data[2][item.key])
            : "--",
        reported_time_display1:
          data && data[1] && data[1][item.key]
            ? convertValue(data[1][item.key])
            : "--",
        reported_time_display0:
          data && data[0] && data[0][item.key]
            ? convertValue(data[0][item.key])
            : "--",
      };
    });
  };

  return convertArr(arrTree);
};

export default getDataTable;
