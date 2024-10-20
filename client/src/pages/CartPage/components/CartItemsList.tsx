import DataTableBase from "../../../components/ui/DataTableBase";
import { listCartProduct } from "../../../utils";
import { API_URL } from "../../../constant";
import { formatRupiah } from "../../../shared/FormatRupiah";
import { format } from "path";

type CartItemsListProps = {
  setSelectedRows?: any;
  cartData: any;
};

const CartItemsList = ({ setSelectedRows, cartData }: CartItemsListProps) => {
  const columns = [
    {
      name: "Product Details",
      selector: (row) => (
        <div className="flex">
          <img
            src={`${API_URL}/${row.product.image}`}
            alt={row.product.name}
            className="w-20"
          />
          <div className="text-left flex flex-col justify-center">
            <p className="font-bold text-lg">{row.product.name}</p>
            <p>Price : {formatRupiah(row.product.price)}</p>
          </div>
        </div>
      ),
      sortable: false,
    },
    {
      name: "Quantity",
      selector: (row) => (row ? row.quantity : 0),
      sortable: false,
    },
    {
      name: "Total Price",
      selector: (row) =>
        row ? formatRupiah(row.quantity * row.product.price) : 0,
    },
  ];

  return (
    <section className="m-9 mt-0 rounded-xl shadow-lg">
      <DataTableBase
        columns={columns}
        data={cartData ? cartData : listCartProduct}
        title="Cart"
        onSelectedRowsChange={setSelectedRows}
        isSelectableRows={true}
      />
    </section>
  );
};

export default CartItemsList;
