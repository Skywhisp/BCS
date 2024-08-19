import React from "react";

interface ContactCardProps {
  className?: string;
  contact: string;
  imagePath: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  className,
  contact,
  imagePath,
}) => {
  return (
    <div
      className={`flex items-center rounded-[1.3125rem] w-[38.125rem] h-[18.5625rem] border shadow custom-shadow ${className}`}
    >
      <img src={imagePath} alt="contact type" className="mr-[1.5625rem]"></img>
      <span className="font-medium text-2xl text-custom-black">{contact}</span>
    </div>
  );
};

export default ContactCard;
