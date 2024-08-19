/* eslint-disable no-irregular-whitespace */
import React from "react";

interface RequestCardProps {
  requestRef: React.RefObject<HTMLDivElement>;
}

const RequestCard: React.FC<RequestCardProps> = ({ requestRef }) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="mb-[7.5rem] bg-custom-card-blue h-[27.5rem] rounded-[3.5rem] mx-auto max-w-[77.625rem] flex items-center">
      <div className="text-white flex-1 ml-[4rem]">
        <h2 className="text-[2rem] leading-[3.125rem] font-semibold uppercase max-w-[30.75rem] mb-[.9375rem]">
          Кто будет вести переговоры с производителем?
        </h2>
        <p className="text-[1rem] leading-[1.5625rem] max-w-[28.75rem] mb-[2.5rem]">
          Вы можете полностью делегировать переговоры нам. У нас есть
          представители в Китае, Турции, Индии и ЮАР. Каждый из них
          в совершенстве знает местный язык и культуру и сможет легко заключить
          сделку
        </p>
        <button
          onClick={() => scrollToRef(requestRef)}
          className="bg-white text-custom-blue uppercase text-base font-semibold py-[1rem] px-[2.1875rem] rounded-2xl"
        >
          Оставить заявку
        </button>
      </div>
      <img
        src="/src/assets/Earth.svg"
        alt="Earth"
        className="mr-[3.125rem] mb-[-1.25rem]"
      />
    </section>
  );
};

export default RequestCard;
