import React from "react";
import { CustomerSayList } from "../../../variables/general";
import Slider from "react-slick";

export default function CustomerSay({ name, desc, photo, job }) {
  const printReview = CustomerSayList.map((review, index) => {
    return (
      <div>
        <div
          className="flex flex-col gap-1 border p-2 w-96 h-40 rounded-md mx-6"
          key={index}
        >
          <div className="flex flex-row gap-1">
            <img
              src={review.photo}
              alt={review.name}
              className="rounded-full h-20 w-20"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">{review.name}</h1>
              <h1 className="text-md">{review.job}</h1>
            </div>
          </div>
          <p className="text-md">{review.desc}</p>
        </div>
      </div>
    );
  });

  const AutoPlay = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4500,
      autoplaySpeed: 2000,
      cssEase: "linear ",
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {/* <printReview/> */}
          {printReview}
        </Slider>
      </div>
    );
  };

  return (
    <div className="my-16">
      <h1 className="text-center text-5xl font-medium">
        What Our Customer Say
      </h1>
      <div className="my-20">
        {/* {printReview} */}
        {AutoPlay()}
      </div>
    </div>
  );
}
