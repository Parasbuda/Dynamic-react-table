import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ options }) => {
  const { data, setData, headers } = options;
  const handleChange = (e, id) => {
    const updated = data.map((dat) => {
      if (dat.id === id) {
        dat[e.target.name] = e.target.value;
      }
      return dat;
    });
    setData(updated);
  };
  const handleDelete = (id) => {
    const updated = data.filter((dat) => dat.id !== id);
    setData(updated);
  };
  return (
    <tbody>
      {data?.map((dat, i) => {
        return (
          <TableRow
            key={dat.id}
            data={dat}
            i={i}
            handleChange={handleChange}
            handleDelete={handleDelete}
            headers={headers}
          />
        );
      })}
    </tbody>
  );
};

export default React.memo(TableBody);
