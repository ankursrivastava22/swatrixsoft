import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(on-demand-app-development)";
import OnDemandPage from "./(on-demand-app-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const OnDemandPageLayout = () => {
  return (
    <>
      <OnDemandPage />

      <BackToTop />
    </>
  );
};

export default OnDemandPageLayout;
