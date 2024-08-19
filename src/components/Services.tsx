import React from "react";
import ServiceCard from "./UI/ServiceCard";

const Services: React.FC = () => {
  return (
    <section className="mt-[2.875rem] mb-[7.5rem] mx-auto max-w-[77.625rem]">
      <h2 className="text-[2.5rem] uppercase font-semibold text-custom-black mb-[3.125rem]">
        Наши возможности
      </h2>
      <div className="grid grid-areas-services">
        <ServiceCard
          iconPath="/src/assets/services/factory.svg"
          title="Поиск производителя"
          desc="Из тысяч производитедей подберём для вас наиболее подходящего"
          className="grid-area-card1"
        />
        <ServiceCard
          iconPath="/src/assets/services/talk.svg"
          title="Переговоры с производителями"
          desc="Договоримся с производителем о поставках на самых выгодных условиях"
          className="grid-area-card2"
        />
        <ServiceCard
          iconPath="/src/assets/services/payment.svg"
          title="Оплата товара"
          desc="Если Вам нужна будет помощь с оплатой, мы сможем оплатить товар зарубежной картой"
          className="grid-area-card3"
        />
        <ServiceCard
          iconPath="/src/assets/services/delivery.svg"
          title="Логистика"
          desc="Организуем фрахт, авиа, ж/д или автодоставку"
          height="h-[16.25rem]"
          className="grid-area-card4"
        />
        <ServiceCard
          iconPath="/src/assets/services/customs.svg"
          title="Таможня"
          desc="Поможем с таможенным оформлением"
          height="h-[16.25rem]"
          className="grid-area-card5"
        />
        <ServiceCard
          iconPath="/src/assets/services/certification.svg"
          title="Сертификация"
          desc="Обеспечим сертифиацию товаров"
          height="h-[16.25rem]"
          className="grid-area-card6"
        />
      </div>
    </section>
  );
};

export default Services;
