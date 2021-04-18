import React from "react";
import Input from "./Input";

const TableRow = ({ data, i, handleChange, handleDelete, headers }) => {
  const { id, ...res } = data;
  const values = Object.entries(res);
  const updated = values.map((value, i) => {
    return { ...value, ...headers[i + 1] };
  });
  return (
    <tr>
      <td>{i + 1}</td>
      {updated?.map((value, i) => {
        return (
          <td key={i}>
            {value[1] === true ? (
              "Yes"
            ) : value[1] === false ? (
              "NO"
            ) : value?.isEditiable ? (
              <Input
                name={value[0]}
                value={value[1]}
                handleChange={handleChange}
                handleDelete={handleDelete}
                id={id}
              />
            ) : (
              value[1]
            )}
          </td>
        );
      })}
      <td>
        <button
          type="btn "
          className="btn-danger"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default React.memo(TableRow);
