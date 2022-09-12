import React, { useEffect, useState, useCallback } from "react";
import "./App.scss";
import Account from "./Account/Account";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import axios from "axios";
import SortTable from "./SortTable/SortTable";
import SortTableTest from "./SortTableTest/SortTableTest";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [accountsTypes, setAccountsTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "5d9f48133cbe87164d4bb12c";
  const urlAccounts = `https://recruitmentdb-508d.restdb.io/rest/accounts`;
  const urlAccountsTypes = `https://recruitmentdb-508d.restdb.io/rest/accounttypes`;

  const fetchData = useCallback(async (url, api, setMethod) => {
    setIsLoading(true);
    const response = await axios({
      method: "get",
      headers: {
        "x-api-key": api,
      },
      url: url,
    });
    await setMethod(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData(urlAccountsTypes, apiKey, setAccountsTypes);
    fetchData(urlAccounts, apiKey, setAccounts);
    setTableData(
      accounts.map((item) => ({
        col1: item.name,
        col2: item.profitLoss,
        col3: item.type,
      }))
    );
  }, []);
  return (
    <div className="container">
      <h2>Zadanie IG Group</h2>
      {/* {isLoading ? (
        <LoadingSpinner />
      ) : (
        <table>
          <tr className="table-header">
            <td>Name</td>
            <td>Profit & Loss</td>
            <td>Account Type</td>
          </tr>
          {accounts.map((account) =>
            account.name ? (
              <SortTableTest
                key={account._id}
                name={account.name}
                profitLoss={account.profitLoss ? account.profitLoss : 0}
                currency={account.currency}
                type={accountsTypes.map((type) => (type.id.includes(account.accountType) ? type.title : null))}
              />
            ) : null
          )}
        </table>
      )} */}

      {/* {isLoading ? <LoadingSpinner /> : <SortTable accounts={accounts} tableData={tableData} />} */}

      <SortTable accounts={accounts} data={tableData} />
    </div>
  );
};

export default App;
