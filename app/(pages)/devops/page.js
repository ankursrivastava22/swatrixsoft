import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(devops)";
import DevopsPage from "./(devops)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const DevopsPageLayout = () => {
  return (
    <>
      <DevopsPage />

      <BackToTop />
    </>
  );
};

export default DevopsPageLayout;
