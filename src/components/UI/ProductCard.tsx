import React from "react";

interface ProductCardProps {
  iconPath: string;
  title: string;
  desc: string;
  width?: string;
  height?: string;
  widthP?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  iconPath,
  title,
  desc,
  width = "w-[25rem]",
  height = "h-[20rem]",
  widthP ="max-w-[18.3125rem]",
}) => {
  return (
    <div
      className={`bg-custom-card-blue rounded-[3.5rem] pt-[1.25rem] pl-[2.1875rem] text-white ${width} ${height}`}
    >
      <div className="">
        <img src={iconPath} alt="service icon" />
        <h3 className="font-semibold text-[1.375rem] mt-[.4375rem] leading-[2.125rem] uppercase">
          {title}
        </h3>
        <p className={`text-[1rem] leading-[1.5625rem] mt-[1.125rem] w-auto ${widthP}`}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
