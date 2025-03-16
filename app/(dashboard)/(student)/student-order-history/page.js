import BackToTop from "@/app/backToTop";
import StudentStory from "./(order-history)";

export const metadata = {
  title:
    "Student Order History Attempts Course - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const OrderHistoryLayout = () => {
  return (
    <>
      <StudentStory />

      <BackToTop />
    </>
  );
};

export default OrderHistoryLayout;
