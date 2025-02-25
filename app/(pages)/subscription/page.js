import BackToTop from "@/app/backToTop";
import SubscriptionPage from "./(subscription)";

export const metadata = {
  title: "Subscription - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SubscriptionLayout = () => {
  return (
    <>
      <SubscriptionPage />

      <BackToTop />
    </>
  );
};

export default SubscriptionLayout;
