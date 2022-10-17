import { convertValue } from "../../utility/index";

const getDataTable = (propsData: any, queryString: string) => {
  let data: { [x: string]: any }[] = [];
  let data_ttm: { [x: string]: any }[] = [];
  if (queryString === "Annual") {
    (data = propsData?.financials?.income),
      (data_ttm = propsData?.financials?.income_ttm);
  } else {
    data = propsData?.financials?.income_quarterly;
    data_ttm = propsData?.financials?.income_quarterly_ttm;
  }

  const arrTree = [
    {
      title: "Total Revenue",
      key: "total_revenue",
      items: [
        {
          title: "Operating Revenue",
          key: "operating_revenue",
        },
        {
          title: "Net Interest Income",
          key: "net_interest_income",
          items: [
            {
              title: "Interest Income",
              key: "interest_income",
            },
            {
              title: "Interest Expense",
              key: "interest_expense",
            },
          ],
        },
        {
          title: "Non Interest Income",
          key: "non_interest_income",
        },
        {
          title: "Total Premiums Earned",
          key: "total_premiums_earned",
        },
        {
          title: "Fees And Commissions",
          key: "fees_and_commissions",
          items: [
            {
              title: "Fees & Commission Income",
              key: "feesand_commission_income",
            },
            {
              title: "Fees & Commission Expense",
              key: "feesand_commission_expense",
            },
          ],
        },
        {
          title: "Dividend Income",
          key: "dividend_income",
        },
        {
          title: "Foreign Exchange Trading Gains",
          key: "foreign_exchange_trading_gains",
        },
        {
          title: "Other Non Interest Income",
          key: "other_non_interest_income",
        },
      ],
    },
    {
      title: "Cost of Revenue",
      key: "cost_of_revenue",
    },
    {
      title: "Credit Losses Provision",
      key: "credit_losses_provision",
    },
    {
      title: "Non Interest Expenses",
      key: "non_interest_expense",
      items: [
        {
          title: "Occupancy And Equipment",
          key: "occupancy_and_equipment",
          items: [
            {
              title: "Net Occupancy Expense",
              key: "net_occupancy_expense",
            },
          ],
        },
        {
          title: "Professional Expense And Contract Services Expense",
          key: "professional_expense_and_contract_services_expense",
        },
        {
          title: "Selling General and Administrative",
          key: "selling_general_and_administration",
          items: [
            {
              title: "General & Administrative Expense",
              key: "general_and_administrative_expense",
              items: [
                {
                  title: "Salaries and Wages",
                  key: "salaries_and_wages",
                },
                {
                  title: "Rental & Landing Fees",
                  key: "rent_and_landing_fees",
                },
              ],
            },
            {
              title: "Selling & Marketing Expense",
              key: "selling_and_marketing_expense",
            },
          ],
        },
        {
          title: "Depreciation Amortization Depletion",
          key: "depreciation_amortization_depletion_income_statement",
          items: [
            {
              title: "Depreciation & amortization",
              key: "depreciation_and_amortization_in_income_statement",
              items: [
                {
                  title: "Depreciation",
                  key: "depreciation_income_statement",
                },
                {
                  title: "Amortization",
                  key: "amortization",
                  items: [
                    {
                      title: "Amortization of Intangibles",
                      key: "amortization_of_intangibles_income_statement",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Other Non Interest Expense",
          key: "other_non_interest_expense",
        },
      ],
    },
    {
      title: "Gross Profit",
      key: "gross_profit",
    },
    {
      title: "Operating Expense",
      key: "operating_expense",
      items: [
        {
          title: "Selling General and Administrative",
          key: "selling_general_and_administration",
          items: [
            {
              title: "General & Administrative Expense",
              key: "general_and_administrative_expense",
              items: [
                {
                  title: "Other G and A",
                  key: "other_gand_a",
                },
              ],
            },
            {
              title: "Selling & Marketing Expense",
              key: "selling_and_marketing_expense",
            },
          ],
        },
        {
          title: "Research & Development",
          key: "research_and_development",
        },
        {
          title: "Depreciation Amortization Depletion",
          key: "depreciation_amortization_depletion_income_statement",
          items: [
            {
              title: "Depreciation & amortization",
              key: "depreciation_and_amortization_in_income_statement",
              items: [
                {
                  title: "Depreciation",
                  key: "depreciation_income_statement",
                },
                {
                  title: "Amortization",
                  key: "amortization",
                  items: [
                    {
                      title: "Amortization of Intangibles",
                      key: "amortization_of_intangibles_income_statement",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Other Operating Expenses",
          key: "other_operating_expenses",
        },
      ],
    },
    {
      title: "Operating Income",
      key: "operating_income",
    },
    {
      title: "Net Non Operating Interest Income Expense",
      key: "net_non_operating_interest_income_expense",
      items: [
        {
          title: "Interest Income Non Operating",
          key: "interest_income_non_operating",
        },
        {
          title: "Interest Expense Non Operating",
          key: "interest_expense_non_operating",
        },
        {
          title: "Total Other Finance Cost",
          key: "total_other_finance_cost",
        },
      ],
    },
    {
      title: "Other Income Expense",
      key: "other_income_expense",
      items: [
        {
          title: "Special Income Charges",
          key: "special_income_charges",
          items: [
            {
              title: "Restructuring & Mergers Acquisition",
              key: "restructuring_and_mergern_acquisition",
            },
          ],
        },
        {
          title: "Other Non Operating Income Expenses",
          key: "other_non_operating_income_expenses",
        },
      ],
    },
    {
      title: "Pretax Income",
      key: "pretax_income",
    },
    {
      title: "Tax Provision",
      key: "tax_provision",
    },
    {
      title: "Net Income Common Stockholders",
      key: "net_income_common_stockholders",
      items: [
        {
          title: "Net Income",
          key: "net_income",
          items: [
            {
              title: "Net Income Including Non-Controlling Interests",
              key: "net_income_including_noncontrolling_interests",
              items: [
                {
                  title: "Net Income Continuous Operations",
                  key: "net_income_continuous_operations",
                },
              ],
            },
            {
              title: "Minority Interests",
              key: "minority_interests",
            },
          ],
        },
        {
          title: "Otherunder Preferred Stock Dividend",
          key: "otherunder_preferred_stock_dividend",
        },
      ],
    },
    {
      title: "Average Dilution Earnings",
      key: "average_dilution_earnings",
    },
    {
      title: "Diluted NI Available to Com Stockholders",
      key: "diluted_ni_availto_com_stockholders",
    },
    {
      title: "Basic EPS",
      key: "basic_eps",
    },
    {
      title: "Diluted EPS",
      key: "diluted_eps",
    },
    {
      title: "Basic Average Shares",
      key: "basic_average_shares",
    },
    {
      title: "Diluted Average Shares",
      key: "diluted_average_shares",
    },
    {
      title: "Net Income from Continuing & Discontinued Operation",
      key: "net_income_from_continuing_and_discontinued_operation",
    },
    {
      title: "Normalized Income",
      key: "normalized_income",
    },
    {
      title: "Reconciled Depreciation",
      key: "reconciled_depreciation",
    },
    {
      title: "Net Income from Continuing Operation Net Minority Interest",
      key: "net_income_from_continuing_operation_net_minority_interest",
    },
    {
      title: "Total Unusual Items Excluding Goodwill",
      key: "total_unusual_items",
    },
    {
      title: "Total Unusual Items",
      key: "total_unusual_items",
    },
    {
      title: "Tax Rate for Calcs",
      key: "tax_rate_for_calcs",
    },
    {
      title: "Tax Effect of Unusual Items",
      key: "tax_effect_of_unusual_items",
    },
    {
      title: "Total Operating Income as Reported",
      key: "total_operating_income_as_reported",
    },
    {
      title: "Total Expenses",
      key: "total_expenses",
    },
    {
      title: "Interest Income",
      key: "interest_income",
    },
    {
      title: "Interest Expense",
      key: "interest_expense",
    },
    {
      title: "Net Interest Income",
      key: "net_interest_income",
    },
    {
      title: "EBIT",
      key: "ebit",
    },
    {
      title: "EBITDA",
      key: "ebitda",
    },
    {
      title: "Reconciled Cost of Revenue",
      key: "reconciled_cost_of_revenue",
    },
    {
      title: "Normalized EBITDA",
      key: "normalized_ebitda",
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
