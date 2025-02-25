import BackToTop from "../backToTop";
import UdemyAffiliatePage from "./(udemy-affiliate)";

export const metadata = {
  title: "Udemy Affiliate - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const UdemyAffiliateLayout = () => {
  return (
    <>
      <UdemyAffiliatePage />
      <BackToTop />
    </>
  );
};

export default UdemyAffiliateLayout;
