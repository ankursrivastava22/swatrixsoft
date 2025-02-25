import Image from "next/image";
import Link from "next/link";

import client from "../../public/images/testimonial/client-02.png";

const Badge = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="rbt-badge-group">
            <span className="rbt-default-badge position-static">
              Histudy Badge
            </span>
            <span className="rbt-badge">Histudy Badge</span>
            <span className="rbt-badge-4">Histudy Badge</span>
            <span className="rbt-badge-5">Histudy Badge</span>
            <span className="rbt-badge variation-02 bg-primary-opacity">
              Histudy Badge
            </span>
            <span className="rbt-badge-6 bg-primary-opacity">
              Histudy Badge
            </span>
            <span className="rbt-badge-6 bg-secondary-opacity">
              Histudy Badge
            </span>
            <Link href="#" className="rbt-badge-2">
              <div className="image">
                <Image
                  src={client}
                  width={30}
                  height={30}
                  alt="Education Images"
                />
              </div>
              Learn with <strong>Fatima Asrafy</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
