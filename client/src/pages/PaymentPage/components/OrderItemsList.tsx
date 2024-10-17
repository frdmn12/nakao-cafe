import DataTableBase from "../../../components/ui/DataTableBase";
import { listCartProduct } from "../../../utils";

const OrderItemsList = () => {
    const columns = [
        {
          name: "Product Details",
          selector: (row) => (
            <div className="flex">
              <img src={row.image} alt={row.name} className="w-20" />
              <div className="text-left flex flex-col justify-center">
                <p className="font-bold text-lg">{row.name}</p>
                <p>Price : {row.price}</p>
              </div>
            </div>
          ),
          sortable: false,
        },
        {
          name: "Quantity",
          selector: (row) => row.quantity,
          sortable: false,
        },
        {
          name: "Total Price",
          selector: (row) => row.price * row.quantity,
        },
      ];
    
  return (
    <section className="m-2 rounded-xl w-[45em]">
      <DataTableBase
        columns={columns}
        data={listCartProduct}
        title="Order Items"
        isSelectableRows={false}
      />
      <div className="border-t-2 border-b-2 border-black mt-2">
        <h1 className="font-bold text-xl">Total Price: $100</h1>
      </div>
    </section>
  );
};

export default OrderItemsList;
