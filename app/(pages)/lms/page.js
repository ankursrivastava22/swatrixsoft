import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(lms)";
import LMSPage from "./(lms)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const LMSPageLayout = () => {
  return (
    <>
      <LMSPage />

      <BackToTop />
    </>
  );
};

export default LMSPageLayout;
