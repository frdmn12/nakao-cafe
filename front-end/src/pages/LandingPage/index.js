import React from "react";
import { Hero } from "./components/Hero";
import { TopSale } from "./components/TopSale";
import { WhereWeAt } from "./components/WhereWeAt";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      <TopSale />
      <WhereWeAt />
    </div>
  );
}
