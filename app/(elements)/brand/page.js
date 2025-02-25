import BackToTop from "@/app/backToTop";
import BrandPage from "./(brand)";

export const metadata = {
  title: "Brand - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
