import BackToTop from "@/app/backToTop";
import OrderHistoryPage from "./(order-history)";

export const metadata = {
  title:
    "Instructor Order History - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const OrderHistoryLayout = () => {
  return (
    <>
      <OrderHistoryPage />

      <BackToTop />
    </>
  );
};

export default OrderHistoryLayout;
