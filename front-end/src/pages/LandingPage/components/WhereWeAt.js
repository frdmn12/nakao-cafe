import React from "react";
import { StoreList } from "../../../variables/general";

export const WhereWeAt = () => {
  return (
    <div>
      <div className="flex gap-24 p-10">
        <h1 className="text-7xl font-medium">Where We At</h1>
        <div className="w-96">
          <p className="text-md ">
            Berikut merupakan lokasi dari toko kami yang berada di kota Malang.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 my-5">
        {StoreList.map((store) => {
          return (
            <div
              className="flex flex-col justify-end gap-1 p-4 hover:opacity-75"
              style={{
                backgroundImage: `url(${store.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                width: "100%",
              }}
            >
              <h1>
                <span className="text-3xl font-medium text-gray-100 bg-opacity-50">
                  {store.location_name}
                </span>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
