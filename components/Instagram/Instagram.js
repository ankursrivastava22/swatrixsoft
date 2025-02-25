import Image from "next/image";

import InstagramData from "../../data/elements/instagram.json";

const Instagram = () => {
  return (
    <div className="container-fluid">
      <div className="row g-3">
        {InstagramData &&
          InstagramData.instagram.map((data, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={index}>
              <div className="instagram-grid">
                <a href="#">
                  <Image
                    src={data.img}
                    width={384}
                    height={431}
                    alt="instagram"
                  />
                  <span className="user-info">
                    <span className="icon">
                      <i className="icon-instagram"></i>
                    </span>
                    <span className="user-name">{data.name}</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Instagram;
