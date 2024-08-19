import React from "react";
import ShowcaseCard from "./UI/ShowcaseCard";

const Showcase: React.FC = () => {
  return (
    <section className="mt-[2.875rem] mb-[7.5rem] mx-auto max-w-[77.625rem]">
      <h2 className="text-[2.5rem] uppercase font-semibold text-custom-black mb-[3.125rem]">
        Витрина товаров
      </h2>
      <div className="grid grid-areas-services">
        <ShowcaseCard className="grid-area-card1" />
        <ShowcaseCard className="grid-area-card2" />
        <ShowcaseCard className="grid-area-card3" />
      </div>
    </section>
  );
};

export default Showcase;
