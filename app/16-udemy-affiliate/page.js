import BackToTop from "../backToTop";
import UdemyAffiliatePage from "./(udemy-affiliate)";

export const metadata = {
  title: "Udemy Affiliate - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
