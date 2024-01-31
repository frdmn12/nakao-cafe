import React from "react";

export default function CustomerSay() {
  return (
    <div className="my-16">
      <h1 className="text-center text-5xl font-medium">
        What Our Customer Say
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-6 mt-20">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1">
            <div className="bg-gray-900 rounded-full h-20 w-20"></div>
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">John Doe</h1>
              <h1 className="text-md">CEO of Google</h1>
            </div>
          </div>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1">
            <div className="bg-gray-900 rounded-full h-20 w-20"></div>
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">John Doe</h1>
              <h1 className="text-md">CEO of Google</h1>
            </div>
          </div>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1">
            <div className="bg-gray-900 rounded-full h-20 w-20"></div>
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">John Doe</h1>
              <h1 className="text-md">CEO of Google</h1>
            </div>
          </div>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
}
