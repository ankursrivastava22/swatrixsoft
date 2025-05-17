import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(smo-services)";
import SMOPage from "./(smo-services)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SMOPageLayout = () => {
  return (
    <>
      <SMOPage />

      <BackToTop />
    </>
  );
};

export default SMOPageLayout;
