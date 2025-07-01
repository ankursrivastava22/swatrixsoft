import BackToTop from "@/app/backToTop";
import ShippingAPIPage from "./(shipping-api-integration)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const ShippingAPIPageLayout = () => {
  return (
    <>
      <ShippingAPIPage />

      <BackToTop />
    </>
  );
};

export default ShippingAPIPageLayout;
