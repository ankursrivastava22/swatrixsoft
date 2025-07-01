import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(business-intelligence)";
import BIPage from "./(business-intelligence)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const BIPageLayout = () => {
  return (
    <>
      <BIPage />

      <BackToTop />
    </>
  );
};

export default BIPageLayout;
