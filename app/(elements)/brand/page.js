import BackToTop from "@/app/backToTop";
import BrandPage from "./(brand)";

export const metadata = {
  title: "Brand - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const BrandLayout = () => {
  return (
    <>
      <BrandPage />

      <BackToTop />
    </>
  );
};

export default BrandLayout;
