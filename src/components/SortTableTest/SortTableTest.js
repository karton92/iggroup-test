import React from "react";

//SCSS & ICONS
import "./SortTableTest.scss";

const SortTableTest = ({ name, profitLoss, currency, type }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          {currency} {profitLoss}
        </td>
        <td>{type}</td>
      </tr>
    </>
  );
};

export default SortTableTest;
