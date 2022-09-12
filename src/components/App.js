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

  return <div className="container"></div>;
};

export default App;
