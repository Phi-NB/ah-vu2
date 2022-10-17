import { convertValue } from "../../utility/index";

const getDataTable = (propsData: any, queryString: string) => {
  let data: { [x: string]: any }[] = [];

  if (queryString === "Annual") {
    data = propsData?.financials?.balance_sheet;
  } else {
    data = propsData?.financials?.balance_sheet_quarterly;
  }

  const arrTree = [
    {
      title: "Total Assets",
      key: "total_assets",
      items: [
        {
          title: "Current Assets",
          key: "current_assets",
          items: [
            {
              title: "Cash, Cash Equivalents & Short Term Investments",
              key: "cash_cash_equivalents_and_short_term_investments",
              items: [
                {
                  title: "Cash And Cash Equivalents",
                  key: "cash_and_cash_equivalents",
                  items: [
                    {
                      title: "Cash",
                      key: "cash_financial",
                    },
                    {
                      title: "Cash Equivalents",
                      key: "cash_equivalents",
                    },
                  ],
                },
                {
                  title: "Other Short Term Investments",
                  key: "other_short_term_investments",
                },
              ],
            },
            {
              title: "Receivables",
              key: "receivables",
              items: [
                {
                  title: "Accounts receivable",
                  key: "accounts_receivable",
                  items: [
                    {
                      title: "Gross Accounts Receivable",
                      key: "gross_accounts_receivable",
                    },
                    {
                      title: "Allowance For Doubtful Accounts Receivable",
                      key: "allowance_for_doubtful_accounts_receivable",
                    },
                  ],
                },
                {
                  title: "Taxes Receivableeceivables",
                  key: "taxes_receivable",
                },
                {
                  title: "Receivables Adjustments Allowances",
                  key: "receivables_adjustments_allowances",
                },
                {
                  title: "Other Receivables",
                  key: "other_receivables",
                },
              ],
            },
            {
              title: "Inventory",
              key: "inventory",
              items: [
                {
                  title: "Raw Materials",
                  key: "raw_materials",
                },
                {
                  title: "Work in Process",
                  key: "work_in_process",
                },
                {
                  title: "Finished Goods",
                  key: "finished_goods",
                },
                {
                  title: "Other Inventories",
                  key: "other_inventories",
                },
              ],
            },
            {
              title: "Prepaid Assets",
              key: "prepaid_assets",
            },
            {
              title: "Current Deferred Assets",
              key: "current_deferred_assets",
              items: [
                {
                  title: "Current Deferred Taxes Assets",
                  key: "current_deferred_taxes_assets",
                },
              ],
            },
            {
              title: "Assets Held for Sale Current",
              key: "assets_held_for_sale_current",
            },
            {
              title: "Hedging Assets Current",
              key: "hedging_assets_current",
            },
            {
              title: "Other Current Assets",
              key: "other_current_assets",
            },
          ],
        },
        {
          title: "Total non-current assets",
          key: "total_non_current_assets",
          items: [
            {
              title: "Net PPE",
              key: "net_ppe",
              items: [
                {
                  title: "Gross PPE",
                  key: "gross_ppe",
                  items: [
                    {
                      title: "Mineral Properties",
                      key: "mineral_properties",
                    },
                    {
                      title: "Properties",
                      key: "properties",
                    },
                    {
                      title: "Land And Improvements",
                      key: "land_and_improvements",
                    },
                    {
                      title: "Buildings And Improvements",
                      key: "buildings_and_improvements",
                    },
                    {
                      title: "Machinery Furniture Equipment",
                      key: "machinery_furniture_equipment",
                    },
                    {
                      title: "Construction in Progress",
                      key: "construction_in_progress",
                    },
                    {
                      title: "Leases",
                      key: "leases",
                    },
                    {
                      title: "Other Properties",
                      key: "other_properties",
                    },
                  ],
                },
                {
                  title: "Accumulated Depreciation",
                  key: "accumulated_depreciation",
                },
              ],
            },
            {
              title: "Goodwill And Other Intangible Assets",
              key: "goodwill_and_other_intangible_assets",
              items: [
                {
                  title: "Goodwill",
                  key: "goodwill",
                },
                {
                  title: "Other Intangible Assets",
                  key: "other_intangible_assets",
                },
              ],
            },
            {
              title: "Investment Properties",
              key: "investment_properties",
            },
            {
              title: "Investments And Advances",
              key: "investments_and_advances",
              items: [
                {
                  title: "Long Term Equity Investment",
                  key: "long_term_equity_investment",
                  items: [
                    {
                      title: "Investments in Associatesat Cost",
                      key: "investmentsin_associatesat_cost",
                    },
                  ],
                },
                {
                  title: "Investment in Financial Assets",
                  key: "investmentin_financial_assets",
                  items: [
                    {
                      title:
                        "Financial Assets Designatedas Fair Value Through Profitor Loss Total",
                      key: "financial_assets_designatedas_fair_value_through_profitor_loss_total",
                    },
                    {
                      title: "Available for Sale Securit",
                      key: "available_for_sale_securities",
                    },
                    {
                      title: "Trading Securities",
                      key: "trading_securities",
                    },
                  ],
                },
                {
                  title: "Other Investments",
                  key: "other_investments",
                },
              ],
            },
            {
              title: "Financial Assets",
              key: "financial_assets",
            },
            {
              title: "Non Current Accounts Receivable",
              key: "non_current_accounts_receivable",
            },
            {
              title: "Non Current Prepaid Assets",
              key: "non_current_prepaid_assets",
            },
            {
              title: "Non Current Deferred Assets",
              key: "non_current_deferred_assets",
              items: [
                {
                  title: "Non Current Deferred Taxes Assets",
                  key: "non_current_deferred_taxes_assets",
                },
              ],
            },
            {
              title: "Defined Pension Benefit",
              key: "defined_pension_benefit",
            },
            {
              title: "Other Non Current Assets",
              key: "other_non_current_assets",
            },
          ],
        },
      ],
    },
    {
      title: "Total Liabilities Net Minority Interest",
      key: "total_liabilities_net_minority_interest",
      items: [
        {
          title: "Current Liabilities",
          key: "current_liabilities",
          items: [
            {
              title: "Payables And Accrued Expenses",
              key: "payables_and_accrued_expenses",
              items: [
                {
                  title: "Payables",
                  key: "payables",
                  items: [
                    {
                      title: "Accounts Payablees",
                      key: "accounts_payable",
                    },
                    {
                      title: "Total Tax Payable",
                      key: "total_tax_payable",
                    },
                    {
                      title: "Dividends Payable",
                      key: "dividends_payable",
                    },
                    {
                      title: "Other Payable",
                      key: "other_payable",
                    },
                  ],
                },
              ],
            },
            {
              title: "Current Provisions",
              key: "current_provisions",
            },
            {
              title: "Pension & Other Post Retirement Benefit Plans Current",
              key: "pensionand_other_post_retirement_benefit_plans_current",
            },
            {
              title: "Current Debt And Capital Lease Obligation",
              key: "current_debt_and_capital_lease_obligation",
              items: [
                {
                  title: "Current Debt",
                  key: "current_debt",
                  items: [
                    {
                      title: "Current Notes Payable",
                      key: "current_notes_payable",
                    },
                    {
                      title: "Line of Credit",
                      key: "line_of_credit",
                    },
                    {
                      title: "Other Current Borrowings",
                      key: "other_current_borrowings",
                    },
                  ],
                },
                {
                  title: "Bank Indebtedness",
                  key: "bank_indebtedness",
                },
                {
                  title: "Current Capital Lease Obligation",
                  key: "current_capital_lease_obligation",
                },
              ],
            },
            {
              title: "Current Deferred Liabilities",
              key: "current_deferred_liabilities",
              items: [
                {
                  title: "Current Deferred Taxes Liabilities",
                  key: "current_deferred_taxes_liabilities",
                },
                {
                  title: "Current Deferred Revenue",
                  key: "current_deferred_revenue",
                },
              ],
            },
            {
              title: "Other Current Liabilities",
              key: "other_current_liabilities",
            },
          ],
        },
        {
          title: "Total Non Current Liabilities Net Minority Interest",
          key: "total_non_current_liabilities_net_minority_interest",
          items: [
            {
              title: "Long Term Provisions",
              key: "long_term_provisions",
            },
            {
              title: "Long Term Debt And Capital Lease Obligation",
              key: "long_term_debt_and_capital_lease_obligation",
              items: [
                {
                  title: "Long Term Debt",
                  key: "long_term_debt",
                },
                {
                  title: "Long Term Capital Lease Obligation",
                  key: "long_term_capital_lease_obligation",
                },
              ],
            },
            {
              title: "Non Current Deferred Liabilities",
              key: "non_current_deferred_liabilities",
              items: [
                {
                  title: "Non Current Deferred Taxes Liabilities",
                  key: "non_current_deferred_taxes_liabilities",
                },
                {
                  title: "Non Current Deferred Revenue",
                  key: "non_current_deferred_revenue",
                },
              ],
            },
            {
              title: "Tradeand Other Payables Non Current",
              key: "tradeand_other_payables_non_current",
            },
            {
              title: "Derivative Product Liabilities",
              key: "derivative_product_liabilities",
            },
            {
              title: "Employee Benefits",
              key: "employee_benefits",
              items: [
                {
                  title:
                    "Non Current Pension And Other Post-Retirement Benefit Plans",
                  key: "non_current_pension_and_other_postretirement_benefit_plans",
                },
              ],
            },
            {
              title: "Other Non Current Liabilities",
              key: "other_non_current_liabilities",
            },
          ],
        },
      ],
    },
    {
      title: "Total Equity Gross Minority Interest",
      key: "total_equity_gross_minority_interest",
      items: [
        {
          title: "Stockholders' Equity",
          key: "stockholders_equity",
          items: [
            {
              title: "Capital Stock",
              key: "capital_stock",
              items: [
                {
                  title: "Common Stock",
                  key: "common_stock",
                },
                {
                  title: "Preferred Stock",
                  key: "preferred_stock",
                },
              ],
            },
            {
              title: "Additional Paid in Capital",
              key: "additional_paid_in_capital",
            },
            {
              title: "Retained Earnings",
              key: "retained_earnings",
            },
            {
              title: "Treasury Stock",
              key: "treasury_stock",
            },
            {
              title: "Gains Losses Not Affecting Retained Earnings",
              key: "gains_losses_not_affecting_retained_earnings",
              items: [
                {
                  title: "Foreign Currency Translation Adjustments",
                  key: "foreign_currency_translation_adjustments",
                },
                {
                  title: "Fixed Assets Revaluation Reserve",
                  key: "fixed_assets_revaluation_reserve",
                },
                {
                  title: "Other Equity Adjustments",
                  key: "other_equity_adjustments",
                },
              ],
            },
            {
              title: "Other Equity Interest",
              key: "other_equity_interest",
            },
          ],
        },
        {
          title: "Minority Interest",
          key: "minority_interest",
        },
      ],
    },
    {
      title: "Total Capitalization",
      key: "total_capitalization",
    },
    {
      title: "Preferred Stock Equity",
      key: "preferred_stock_equity",
    },
    {
      title: "Common Stock Equity",
      key: "common_stock_equity",
    },
    {
      title: "Capital Lease Obligations",
      key: "capital_lease_obligations",
    },
    {
      title: "Net Tangible Assets",
      key: "net_tangible_assets",
    },
    {
      title: "Working Capital",
      key: "working_capital",
    },
    {
      title: "Invested Capital",
      key: "invested_capital",
    },
    {
      title: "Tangible Book Value",
      key: "tangible_book_value",
    },
    {
      title: "Total Debt",
      key: "total_debt",
    },
    {
      title: "Net Debt",
      key: "net_debt",
    },
    {
      title: "Share Issued",
      key: "share_issued",
    },
    {
      title: "Ordinary Shares Number",
      key: "ordinary_shares_number",
    },
    {
      title: "Treasury Shares Number",
      key: "treasury_shares_number",
    },
  ];

  const convertArr = (arr1: any) => {
    return arr1.map((item: any) => {
      if (item.items && item.items.length !== 0) {
        return {
          breakDown: item.title,
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
