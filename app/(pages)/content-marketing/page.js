import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(content-marketing)";
import ContentMarketingPage from "./(content-marketing)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const ContentMarketingPageLayout = () => {
  return (
    <>
      <ContentMarketingPage />

      <BackToTop />
    </>
  );
};

export default ContentMarketingPageLayout;
