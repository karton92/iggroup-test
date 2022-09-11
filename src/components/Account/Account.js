import React from "react";
import "./Account.scss";

const Account = ({ name, profit, currency, type }) => {
  return (
    <div className="account-container">
      <p className="name">{name}</p>
      <p className="profit">
        {profit} {currency}
      </p>
      <p className="type">{type}</p>
    </div>
  );
};

export default Account;
