import React, { useState } from "react";
import { purchaseOrderDetails } from "../data/purchaseOrderDetails";
import Table from "../Component/Table";
const PurchaseOrderDetail = () => {
  const [data, setData] = useState(purchaseOrderDetails);
  const headers = [
    { label: "S.N" },
    { label: "Name", isEditiable: true },
    { label: "Category", isEditiable: false },
    { label: "Purchase Cost", isEditiable: false },
    { label: "Sale Cost", isEditiable: true },
    { label: "Discountable", isEditiable: false },
    { label: "Taxable", isEditiable: false },
    { label: "Tax Rate", isEditiable: true },
    { label: "Action", isEditiable: true },
  ];
  return (
    <>
      <h2 className="text-center">Purchase Order Details</h2>
      <Table data={data} setData={setData} headers={headers} />
    </>
  );
};

export default PurchaseOrderDetail;
