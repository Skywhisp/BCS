import React from "react";

interface ShowcaseCardProps {
  className?: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ className }) => {
  return (
    <div
      className={`rounded-[1.3125rem] text-white w-[25rem] h-[26.875rem] bg-[#F9F9F9] border ${className}`}
    >
        
    </div>
  );
};

export default ShowcaseCard;
