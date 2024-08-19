/* eslint-disable no-irregular-whitespace */
import React from "react";

interface HeroProps {
  requestRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ requestRef }) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="mt-[2.875rem] mb-[7.5rem] mx-auto grid grid-areas-hero max-w-[77.625rem] gap-4">
      <div className="grid-area-content">
        <h1 className="text-[2.5rem] leading-[3.75rem] uppercase w-[31.875rem] font-semibold text-custom-black">
          Найдем и привезём товары откуда угодно
        </h1>
        <p className="text-base text-black-custom w-[24.875rem] mt-[1.875rem]">
          Договариваемся за вас с продавцами о покупках в промышленных масштабах
          и небольшими партиями. Выкупаем товары, обеспечиваем логистику
          и помогаем с таможенным оформлением.
        </p>
        <button
          onClick={() => scrollToRef(requestRef)}
          className="bg-custom-blue rounded-2xl text-white font-semibold text-[1.25rem] leading-[1.55rem] uppercase px-[4rem] py-[1.375rem] mt-[3.75rem]"
        >
          Оставить заявку
        </button>
      </div>
      <img
        src="/src/assets/road.svg"
        alt="road"
        className="grid-area-image"
      ></img>
      <div className="bg-custom-card-blue rounded-3xl w-[38.125rem] h-[23rem] text-white pt-[1.875rem] pl-[1.875rem] flex flex-col justify-between relative overflow-hidden">
        <div>
          <h2 className="font-semibold text-[1.75rem] leading-[2.6875rem] uppercase max-w-[30.75rem]">
            Ищем альтернативных производителей
          </h2>
          <div className="grid grid-cols-3 gap-2 max-w-[17.25rem] mt-[1.5rem]">
            <span className="font-semibold text-[1rem] leading-[1.55rem] py-[.4688rem] px-[.9625rem] text-center border border-white rounded-3xl">
              Россия
            </span>
            <span className="font-semibold text-[1rem] leading-[1.55rem] py-[.4688rem] px-[.9625rem] text-center border border-white rounded-3xl">
              Китай
            </span>
            <span className="font-semibold text-[1rem] leading-[1.55rem] py-[.4688rem] px-[.9625rem] text-center border border-white rounded-3xl">
              Турция
            </span>
            <span className="font-semibold text-[1rem] leading-[1.55rem] py-[.4688rem] px-[.9625rem] text-center border border-white rounded-3xl">
              ЮАР
            </span>
            <span className="font-semibold text-[1rem] leading-[1.55rem] py-[.4688rem] px-[.9625rem] text-center border border-white rounded-3xl">
              Индия
            </span>
          </div>
          <p className="text-[1rem] leading-[1.5625rem] max-w-[14.9375rem] mt-[1.9875rem]">
            Помогаем найти замену западным производителям, ушедшим с российского
            рынка
          </p>
        </div>
        <img
          src="/src/assets/factory.svg"
          alt="Factory"
          className="absolute bottom-0 right-0"
        />
      </div>
      <div className="bg-custom-card-blue rounded-3xl w-[38.125rem] h-[23rem] text-white pt-[1.875rem] pl-[1.875rem] justify-between relative overflow-hidden">
        <h2 className="font-semibold text-[1.75rem] leading-[2.6875rem] uppercase max-w-[30.75rem]">
          Доставляем товары в оптовых масштабах
        </h2>
        <p className="text-[1rem] leading-[1.5625rem] max-w-[17.3125rem] mt-[.875rem]">
          если понадобится, можем доставить груз от 30 кг
        </p>
        <img
          src="/src/assets/cars.svg"
          alt="Trucks"
          className="absolute bottom-0 right-0"
        />
      </div>
    </section>
  );
};

export default Hero;
