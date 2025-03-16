import BackToTop from "@/app/backToTop";
import SubscriptionPage from "./(subscription)";

export const metadata = {
  title: "Subscription - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
