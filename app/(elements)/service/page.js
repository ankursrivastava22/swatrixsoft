import BackToTop from "@/app/backToTop";
import ServicePage from "./(service)";

export const metadata = {
  title: "Service Box - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
