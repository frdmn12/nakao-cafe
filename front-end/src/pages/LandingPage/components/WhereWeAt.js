import React from "react";
import { StoreList } from "../../../variables/general";

export const WhereWeAt = () => {
  return (
    <div >
      <div className="flex gap-24 p-10">
        <h1 className="text-7xl font-medium">Where We At</h1>
        <div className="w-96">
          <p className="text-md ">
            Berikut merupakan lokasi dari toko kami yang berada di kota Malang.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mt-8">
        {StoreList.map((store) => {
          return (
            <div className="flex flex-col gap-1">
              <img
                src={store.image}
                alt={store.location_name}
                className="w-full h-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
