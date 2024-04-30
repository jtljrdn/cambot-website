import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  img: string;
  imgSize?: number;
  children?: React.ReactNode;
}

const FeatureCard = ({ children, img, imgSize }: FeatureCardProps) => {
  imgSize = imgSize || 400;
  return (
    <div className="bg-base-300 rounded-box max-w-[56rem] p-5 gap-10 shadow-md grid md:grid-cols-2 ">
      {children}
      <div>
        <Image
          src={img}
          height={imgSize}
          width={imgSize}
          alt="/fn stats screenshot"
          className="rounded-box justify-center"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
