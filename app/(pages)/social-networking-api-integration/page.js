import BackToTop from "@/app/backToTop";
import SocialNetworkingPage from "./(social-networking-api-integration)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SocialNetworkingPageLayout = () => {
  return (
    <>
      <SocialNetworkingPage />

      <BackToTop />
    </>
  );
};

export default SocialNetworkingPageLayout;
