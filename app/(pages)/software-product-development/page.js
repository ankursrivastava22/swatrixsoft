import BackToTop from "@/app/backToTop";
import SoftwareProductPage from "./(software-product-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SoftwareProductPageLayout = () => {
  return (
    <>
      <SoftwareProductPage />

      <BackToTop />
    </>
  );
};

export default SoftwareProductPageLayout;
