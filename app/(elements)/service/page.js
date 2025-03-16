import BackToTop from "@/app/backToTop";
import ServicePage from "./(service)";

export const metadata = {
  title: "Service Box - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const ServiceLayout = () => {
  return (
    <>
      <ServicePage />
      <BackToTop />
    </>
  );
};

export default ServiceLayout;
