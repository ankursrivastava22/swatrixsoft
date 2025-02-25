import Image from "next/image";
import React from "react";

const CourseBanner = ({ bannerImg }) => {
  return (
    <>
      <Image
        className="w-100"
        src={bannerImg}
        width={800}
        height={550}
        priority
        alt="Card image"
      />
    </>
  );
};

export default CourseBanner;
