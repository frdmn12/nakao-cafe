import React from "react";
import Navbar from "../../../components/Navbar";
export const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center h-screen bg-fixed flex flex-col justify-between">
      <Navbar />
      <div className="mb-20 text-white p-10 flex flex-col gap-4">
        <h1 className="text-8xl font-medium">The best place to meet up with your group</h1>
        <p>
        At our cozy corner, discover more than just a cup of coffee. It's a
          place where stories blend with every brew, where laughter resonates
          through each sip. Come experience the warmth of our space, where
          moments are crafted, friendships brewed, and memories stirred to
          perfection.
        </p>
      </div>
    </div>
  );
};
