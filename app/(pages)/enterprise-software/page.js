import BackToTop from "@/app/backToTop";
import EnterpriseSoftwarePage from "./(enterprise-software)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const EnterpriseSoftwarePageLayout = () => {
  return (
    <>
      <EnterpriseSoftwarePage />

      <BackToTop />
    </>
  );
};

export default EnterpriseSoftwarePageLayout;
