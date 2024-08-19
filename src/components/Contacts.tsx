import React from "react";
import ContactCard from "./UI/ContactCard";

const Contacts: React.FC = () => {
  return (
    <section className="mt-[2.875rem] mb-[7.5rem] mx-auto max-w-[77.625rem]">
      <h2 className="text-[2.5rem] uppercase font-semibold text-custom-black mb-[3.125rem]">
        Контакты
      </h2>
      <div className="grid grid-areas-contacts">
        <ContactCard
          imagePath="/src/assets/phone-contact.svg"
          contact="+7 (912) 646-61-40"
          className="grid-area-card1"
        />
        <ContactCard
          imagePath="/src/assets/email-contact.svg"
          contact="sales@mycontainers.ru"
          className="grid-area-card2"
        />
      </div>
    </section>
  );
};

export default Contacts;
