import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(ui-ux)";
import UIUXPage from "./(ui-ux)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const UIUXPageLayout = () => {
  return (
    <>
      <UIUXPage />

      <BackToTop />
    </>
  );
};

export default UIUXPageLayout;
