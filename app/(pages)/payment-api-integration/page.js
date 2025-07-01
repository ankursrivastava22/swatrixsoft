import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(payment-api-integration)";
import PaymentApiPage from "./(payment-api-integration)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const PaymentApiPageLayout = () => {
  return (
    <>
      <PaymentApiPage />

      <BackToTop />
    </>
  );
};

export default PaymentApiPageLayout;
