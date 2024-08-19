import React from 'react';

interface HeaderProps {
  productsRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  showcaseRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
  requestRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ productsRef, servicesRef, showcaseRef, contactsRef }) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2">
      <div className="container mx-auto flex justify-between items-center py-[0.625rem] max-w-[1242px]">
        <div className="logo">
          <img
            src="/src/assets/logo.svg"
            alt="Logo"
            className="width-[7.1875rem] height-[4.5rem]"
          />
        </div>
        <nav className="space-x-8">
          <button onClick={() => scrollToRef(productsRef)} className="font-semibold text-base uppercase text-black-custom">
            Товары
          </button>
          <button onClick={() => scrollToRef(servicesRef)} className="font-semibold text-base uppercase text-black-custom">
            Услуги
          </button>
          <button onClick={() => scrollToRef(showcaseRef)} className="font-semibold text-base uppercase text-black-custom">
            Витрина
          </button>
          <button onClick={() => scrollToRef(contactsRef)} className="font-semibold text-base uppercase text-black-custom">
            Контакты
          </button>
        </nav>
        <div>
          <button className="uppercase font-semibold text-[14px] text-custom-blue px-[32px] py-[8px] border-custom-blue border-2 rounded-xl">
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
