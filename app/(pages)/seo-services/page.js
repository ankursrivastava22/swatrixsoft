import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(seo-services)";
import SeoPage from "./(seo-services)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SeoPageLayout = () => {
  return (
    <>
      <SeoPage />

      <BackToTop />
    </>
  );
};

export default SeoPageLayout;
