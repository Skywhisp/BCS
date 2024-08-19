import React, { useState } from "react";

const Request: React.FC = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, "");

    if (value.startsWith("8")) {
      value = "7" + value.substring(1);
    }

    if (value.length <= 11) {
      let formatted = value;
      if (value.length > 1) {
        formatted = formatted.replace(
          /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/,
          "+7 ($2) $3-$4-$5"
        );
      } else {
        formatted = formatted.replace(/^(\d{1})/, "+$1");
      }
      setPhone(formatted);
    }
  };

  return (
    <section className="mb-[3.125rem] h-[37.5rem] border rounded-[3.5rem] mx-auto max-w-[77.625rem] flex items-center justify-between">
      <img
        className="ml-[2rem]"
        src="/src/assets/request.svg"
        alt="email"
      ></img>
      <div className="mr-[4.375rem]">
        <h2 className="uppercase font-semibold text-[2rem] text-custom-black leading-[2.6875rem] mb-[2.5rem]">
          Оставьте заявку
        </h2>
        <form className="flex flex-col text-[#282B30]">
          <input
            className="bg-[#F5F8FA] rounded-2xl w-[28.4375rem] h-[3.125rem] pl-[1.25rem] py-[1.0625rem] mb-[1.25rem]"
            type="text"
            name="name"
            placeholder="Имя"
            required
          ></input>
          <input
            className="bg-[#F5F8FA] rounded-2xl w-[28.4375rem] h-[3.125rem] pl-[1.25rem] py-[1.0625rem] mb-[1.25rem]"
            type="tel"
            name="phone"
            placeholder="+7 (999) 999-99-99"
            value={phone}
            onChange={handlePhoneChange}
            required
          ></input>
          <input
            className="bg-[#F5F8FA] rounded-2xl w-[28.4375rem] h-[3.125rem] pl-[1.25rem] py-[1.0625rem] mb-[1.25rem]"
            type="email"
            name="email"
            placeholder="Почта"
            required
          ></input>
          <input
            className="bg-[#F5F8FA] rounded-2xl w-[28.4375rem] h-[3.125rem] pl-[1.25rem] py-[1.0625rem] mb-[1.25rem]"
            type="text"
            name="commentary"
            placeholder="Комментарий"
          ></input>
          <button
            className="border-2 border-custom-blue rounded-2xl text-custom-blue uppercase text-base font-semibold 
                       px-[2.1875rem] py-[.875rem] max-w-[10rem] mt-[.625rem]"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Request;
