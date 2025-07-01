import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(product-auditing)";
import ProductAuditingPage from "./(product-auditing)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const ProductAuditingPageLayout = () => {
  return (
    <>
      <ProductAuditingPage />

      <BackToTop />
    </>
  );
};

export default ProductAuditingPageLayout;
