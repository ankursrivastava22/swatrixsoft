import BackToTop from "@/app/backToTop";
import EcommercePage from "./(ecommerce-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const EcommercePageLayout = () => {
  return (
    <>
      <EcommercePage />

      <BackToTop />
    </>
  );
};

export default EcommercePageLayout;
