import BackToTop from "@/app/backToTop";
import SupportMaintainacePage from "./(support-maintenance)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SupportMaintainacePageLayout = () => {
  return (
    <>
      <SupportMaintainacePage />

      <BackToTop />
    </>
  );
};

export default SupportMaintainacePageLayout;
