import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
const Table = ({ data, setData, headers }) => {
  return (
    <table className="table table-bordered mt-2">
      <TableHeader data={headers} />
      <TableBody options={{ data, setData, headers }} />
      <TableHeader data={headers} />
    </table>
  );
};

export default Table;
