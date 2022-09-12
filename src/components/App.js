import React, { useEffect, useState, useCallback } from "react";
import "./App.scss";
import Account from "./Account/Account";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import axios from "axios";

const App = () => {
  const [accounts, setAccounts] = useState([]);
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
  }, []);
  return (
    <div className="container">
      <h2>Zadanie IG GROUP</h2>
      <div className="table-header"></div>
    </div>
  );
};

export default App;
