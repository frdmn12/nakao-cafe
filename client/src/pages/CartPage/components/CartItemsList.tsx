import DataTableBase from '../../../components/ui/DataTableBase'
import { listCartProduct } from '../../../utils';

const CartItemsList = ({setSelectedRows, cartData}) => {
    
  const columns = [
    {
      name: "Product Details",
      selector: (row ) => (
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
      sortable: false
    },
    {
      name: "Total Price",
      selector: (row) => row.price * row.quantity,
    },
  ];
    
  return (
    <section className="m-9 mt-0 rounded-xl shadow-lg">
        <DataTableBase 
        columns={columns} 
        data={listCartProduct} 
        title="Cart" 
        onSelectedRowsChange={setSelectedRows} 
        isSelectableRows={true}
        />
      </section>
  )
}

export default CartItemsList