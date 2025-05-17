import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(ott-platform-development)";
import OTTPage from "./(ott-platform-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const OTTPageLayout = () => {
  return (
    <>
      <OTTPage />

      <BackToTop />
    </>
  );
};

export default OTTPageLayout;
