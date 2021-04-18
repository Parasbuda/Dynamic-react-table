import React, { useState } from "react";
import { purchaseDetails } from "../data/purchaseDetails";
import Table from "../Component/Table";
const PurchaseDetail = () => {
  const [data, setData] = useState(purchaseDetails);
  const headers = [
    "S.N",
    "Name",
    "Category",
    "Purchase Cost",
    "Sale Cost",
    "Discountable",
    "Taxable",
    "Tax Rate",
    "Tax Amount",
    "Action",
  ];
  return (
    <div>
      <h2 className="text-center">Purchase Details</h2>
      <Table data={data} setData={setData} headers={headers} />
    </div>
  );
};

export default PurchaseDetail;
