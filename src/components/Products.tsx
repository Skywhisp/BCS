import React from "react";
import ProductCard from "./UI/ProductCard";

const Products: React.FC = () => {
  return (
    <section className="mt-[2.875rem] mb-[6rem] mx-auto max-w-[77.625rem]">
      <h2 className="text-[2.5rem] uppercase font-semibold text-custom-black mb-[3.125rem]">
        Товары, которые можем привезти
      </h2>
      <div className="flex flex-row mx-auto max-w-[77.5rem] mb-[1.25rem] justify-between">
        <ProductCard
          iconPath="/src/assets/products/sewing-machine.svg"
          title="Станки и станковое оборудование"
          desc="Имеется спорная точка зрения, гласящая примерно следующее: действия представителей оппозиции указаны"
        />
        <ProductCard
          iconPath="/src/assets/products/chemical-test-tube.svg"
          title="Химия, сырьё для цбп"
          desc="Есть над чем задуматься: ключевые
                особенности структуры проекта лишь
                добавляют фракционных разногласий"
        />
        <ProductCard
          iconPath="/src/assets/products/pill.svg"
          title="Медицина"
          desc="Зелёный, зерновой из Индонезии
                (робуста, арабика) или обжаренный
                зерновой из Вьетнама"
        />
      </div>
      <div className="flex flex-row max-w-[77.5rem] justify-between">
        <ProductCard
          iconPath="/src/assets/products/clothes.svg"
          title="Одежда, обувь"
          desc="Абсорбирующее белье/подгузники для детей и взрослых,
                женские гигиенические средства"
          width="w-[38.125rem]"
          height="h-[17.5rem]"
          widthP="max-w-[25.3125rem]"
        />
        <ProductCard
          iconPath="/src/assets/products/component-parts.svg"
          title="Комплектующие запчасти"
          desc="Зелёный, зерновой из Индонезии (робуста, арабика)
                или обжаренный зерновой из Вьетнама"
          width="w-[38.125rem]"
          height="h-[17.5rem]"
          widthP="max-w-[23.625rem]"
        />
      </div>
    </section>
  );
};

export default Products;
