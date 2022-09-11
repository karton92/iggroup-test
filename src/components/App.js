import React, { useEffect, useState, useCallback } from "react";
import "./App.scss";
import Account from "./Account/Account";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import axios from "axios";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [accountsTypes, setAccountsTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const konta = [
    { name: "IG_GROUP", profit: "1000 zł", type: "normal" },
    { name: "IG_GROUP2", profit: "1000 zł", type: "normal" },
    { name: "IG_GROUP3", profit: "1000 zł", type: "normal" },
    { name: "IG_GROUP4", profit: "1000 zł", type: "normal" },
    { name: "IG_GROUP5", profit: "1000 zł", type: "normal" },
  ];

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

    console.log(response?.data);
    await setMethod(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData(urlAccountsTypes, apiKey, setAccountsTypes);
    fetchData(urlAccounts, apiKey, setAccounts);
    console.log(accounts);
    console.log(accountsTypes);
  }, []);
  return (
    <div className="container">
      <h2>Zadanie IG Group</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        accounts.map((account) => (
          <Account key={account._id} name={account.name} profit={account.funds} currency={account.currency} type={account.accountType} />
        ))
      )}
    </div>
  );
};

export default App;
