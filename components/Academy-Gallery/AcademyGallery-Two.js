import Image from "next/image";
import aboutImg from "../../public/images/about/about-04.jpg";

const AcademyGalleryTwo = () => {
  const services = [
    {
      icon: "feather-code",
      title: "Custom Web Development",
      description: "Tailored solutions for your business needs"
    },
    {
      icon: "feather-smartphone",
      title: "Responsive Design",
      description: "Perfect display on all devices"
    },
    {
      icon: "feather-shopping-cart",
      title: "E-commerce Solutions",
      description: "Powerful online store platforms"
    },
    {
      icon: "feather-clock",
      title: "24/7 Support",
      description: "Round-the-clock assistance"
    }
  ];

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-7 order-2 order-lg-1">
          <div className="pe-lg-5">
            <h2 className="display-6 fw-bold mb-4">Web Development Excellence</h2>
            <p className="lead mb-5">
              At Swatrixsoft, we specialize in creating powerful web solutions that drive business growth. Our expert team combines technical expertise with creative innovation to deliver exceptional results.
            </p>

            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-6">
                  <div className="p-4 bg-light rounded-3 h-100" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} 
                       onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                       onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle p-3 mb-3" 
                         style={{ width: '60px', height: '60px' }}>
                      <i className={`${service.icon} fs-4 text-primary`}></i>
                    </div>
                    <h4 className="fs-5 fw-semibold mb-2">{service.title}</h4>
                    <p className="text-muted mb-0">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-5 order-1 order-lg-2">
          <div className="position-relative">
            <Image
              className="rounded-4 shadow-lg"
              src={aboutImg}
              width={526}
              height={645}
              alt="Web Development Services"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyGalleryTwo;