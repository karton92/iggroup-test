import React, { useEffect, useState, useCallback } from "react";
import "./App.scss";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import axios from "axios";
import SortTable from "./SortTable/SortTable";

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
    console.log(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData(urlAccountsTypes, apiKey, setAccountsTypes);
    fetchData(urlAccounts, apiKey, setAccounts);
    setTableData(
      accounts.map((item) => ({
        col1: item.name,
        col2: `${item.currency} ${item.profitLoss}`,
        col3: accountsTypes.map((type) => (type.id.includes(item.accountType) ? type.title : null)),
      }))
    );
  }, []);
  return (
    <div className="container">
      <h1>Zadanie IG Group</h1>
      {isLoading ? <LoadingSpinner /> : <SortTable tableData={tableData} />}
    </div>
  );
};

export default App;
