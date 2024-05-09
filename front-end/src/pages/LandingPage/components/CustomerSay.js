import React from "react";
import { CustomerSayList } from "../../../variables/general";

export default function CustomerSay({name, desc, photo, job}) {

  const printReview = CustomerSayList.map((review, index) => {
    return (
      <div className="flex flex-col gap-1 border p-2 w-80 rounded-md" key={index}>
        <div className="flex flex-row gap-1">
          <img src={review.photo} alt={review.name} className="rounded-full h-20 w-20" />
          <div className="flex flex-col">
            <h1 className="text-xl font-medium">{review.name}</h1>
            <h1 className="text-md">{review.job}</h1>
          </div>
        </div>
        <p className="text-md">
          {review.desc}
        </p>
      </div>
    )
    
  })
  
  return (
    <div className="my-16">
      <h1 className="text-center text-5xl font-medium">
        What Our Customer Say
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-6 mt-20">
        {printReview}
      </div>
    </div>
  );
}
