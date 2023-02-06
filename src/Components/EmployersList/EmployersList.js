import React from "react";
import EmployersListItem from "../EmployersListItem/EmployersListItem";

export default function EmployersList({ data, onDelete }) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployersListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
      />
    );
  });
  return <ul>{elements}</ul>;
}
