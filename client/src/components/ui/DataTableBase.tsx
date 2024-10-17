import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaArrowDown } from "react-icons/fa";

const sortIcon = <FaArrowDown />;

type TableProps<T> = {
  columns: TableColumn<T>[]; // Update the type for columns
  data: T[];
  title?: string;
  onSelectedRowsChange?: (selectedRows: T[]) => void;
  isSelectableRows?: boolean;
};

function DataTableBase<T>({ onSelectedRowsChange, isSelectableRows, ...props  }: TableProps<T>): JSX.Element {
  const handleChange = (selectedRows: { selectedRows: T[] }) => {
    if (!onSelectedRowsChange) return;
    onSelectedRowsChange(selectedRows.selectedRows);
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
      selectableRows={isSelectableRows}
      onSelectedRowsChange={handleChange}
      sortIcon={sortIcon}
      dense
      progressPending={pending}
      {...props}
    />
  );
}

export default DataTableBase;