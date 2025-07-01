import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(software-outsourcing)";
import SoftwareOutsourcePage from "./(software-outsourcing)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SoftwareOutsourcePageLayout = () => {
  return (
    <>
      <SoftwareOutsourcePage />

      <BackToTop />
    </>
  );
};

export default SoftwareOutsourcePageLayout;
