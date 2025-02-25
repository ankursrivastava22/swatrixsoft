import BackToTop from "@/app/backToTop";
import StudentStory from "./(order-history)";

export const metadata = {
  title:
    "Student Order History Attempts Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
