import React from "react";

interface ServiceCardProps {
  className?: string;
  iconPath: string;
  title: string;
  desc: string;
  height?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  className = "",
  iconPath,
  title,
  desc,
  height = "h-[18.125rem]",
}) => {
  return (
    <div
      className={`bg-custom-card-blue rounded-[3.5rem] text-white pt-[2.5rem] pl-[2.5rem] w-[25rem] ${height} ${className}`}
    >
      <div>
        <img src={iconPath} alt="service icon" />
        <h3 className="font-semibold text-[1.375rem] leading-[2.125rem] uppercase mt-[1.875rem]">
          {title}
        </h3>
        <p className="text-[1rem] leading-[1.5625rem] w-auto max-w-[18.8125rem] mt-[.9375rem]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
