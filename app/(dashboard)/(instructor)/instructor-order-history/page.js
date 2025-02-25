import BackToTop from "@/app/backToTop";
import OrderHistoryPage from "./(order-history)";

export const metadata = {
  title:
    "Instructor Order History - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
