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
            Kunjungi toko kami dan nikmati kopi terbaik kami.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-5">
        {StoreList.map((store) => {
          return (
            <a href={store.google_maps} target="_blank" rel="noreferrer">
              <div
                className="flex flex-col justify-end gap-1 p-4  relative"
                style={{
                  backgroundImage: `url(${store.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                  width: "100%",
                }}
              >
                <div className="absolute inset-0 bg-gray-950 opacity-30 hover:opacity-50"></div>
                <h1 className="text-3xl font-medium text-gray-100 bg-opacity-50 drop-shadow-sm ">
                  <span>{store.location_name}</span>
                </h1>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
