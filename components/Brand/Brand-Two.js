import Image from "next/image";
import Link from "next/link";

import BrandData from "../../data/elements/brands.json";

const BrandTwo = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <ul className="brand-list brand-style-1">
            {BrandData &&
              BrandData.brandTwo.map((data, index) => (
                <li key={index}>
                  <Link href="#">
                    <Image
                      src={data.img}
                      width={data.width}
                      height={data.height}
                      priority={true}
                      alt="Brand Image"
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
