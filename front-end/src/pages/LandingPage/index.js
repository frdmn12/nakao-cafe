import React from "react";
import { Hero } from "./components/Hero";
import { TopSale } from "./components/TopSale";
import { WhereWeAt } from "./components/WhereWeAt";
import CustomerSay from "./components/CustomerSay";
import Footer from "../../components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      <TopSale />
      <WhereWeAt />
      <CustomerSay />
      <Footer />
    </div>
  );
}
