import React from "react";
import DataTable from "react-data-table-component";
import { FaArrowDown } from "react-icons/fa";

const sortIcon = <FaArrowDown />;

type TableProps<T> = {
  columns: any[];
  data: T[];
  title?: string;
  onSelectedRowsChange: (selectedRows: T[]) => void; // Tambahkan prop baru
};

function DataTableBase<T>({ onSelectedRowsChange, ...props }: TableProps<T>): JSX.Element {
  const handleChange = ({ selectedRows }) => {
    onSelectedRowsChange(selectedRows); // Panggil callback dengan selectedRows
  };

  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <DataTable
      pagination
      selectableRows
      onSelectedRowsChange={handleChange}
      sortIcon={sortIcon}
      dense
      progressPending={pending}
      {...props}
    />
  );
}

export default DataTableBase;