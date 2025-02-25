import Image from "next/image";
import Link from "next/link";

import BrandData from "../../data/elements/brands.json";

const BrandThree = () => {
  return (
    <div className="container">
      {BrandData &&
        BrandData.brandThree.map((data, index) => (
          <div className="row align-items-center" key={index}>
            <div className="col-lg-12">
              <div className="section-title text-center mb--40">
                <span className="small-title w-600">{data.title}</span>
              </div>
              <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
                {data.brandLogo.map((item, innerIndex) => (
                  <li key={innerIndex}>
                    <Link href="#">
                      <Image
                        src={item.img}
                        width={item.width}
                        height={item.height}
                        priority={true}
                        alt="Brand Image"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BrandThree;
