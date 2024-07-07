import React, { useState, useEffect } from "react";

export default function TableCart(props) {
  const [qtyCart, setQtyCart] = useState(0);

  const handleQtyCart = (e) => { 
    if (e.target.innerText === "+") {
      setQtyCart(qtyCart + 1);
    } else {
      setQtyCart(qtyCart - 1);
    }
  }

return (
    <>
        <table className="table-auto border-collapse text-left drop-shadow-md bg-white bg-clip-border rounded-xl">
            <thead className="bg-clip-border rounded-2xl">
                <tr className="border bg-black text-white border-slate-400">
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border border-slate-200">
                    <td className="p-7 ">
                        <div className="flex gap-3 items-center">
                            <div className="w-20 h-20 bg-gray-200"></div>
                            <p>Product Name</p>
                        </div>
                    </td>
                    <td>
                        <div className="flex gap-3 items-center ">
                            <button className="bg-black text-white p-3 rounded-lg" onClick={handleQtyCart}>
                                -
                            </button>
                            <p>{qtyCart}</p>
                            <button className="bg-black text-white p-3 rounded-lg" onClick={handleQtyCart}>
                                +
                            </button>
                        </div>
                    </td>
                    <td>$10</td>
                </tr>
            </tbody>
        </table>
        {/* button for payment */}
        <div className="flex justify-end mt-5">
            <button className="bg-black text-white p-3 rounded-lg">Pay Now</button>
        </div>
    </>
);
}
