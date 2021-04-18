import React from "react";

const TableHeader = ({ data }) => {
  return (
    <thead>
      <tr>
        {data?.map((head, i) => {
          return <td key={i}>{head?.label}</td>;
        })}
      </tr>
    </thead>
  );
};

export default React.memo(TableHeader);
