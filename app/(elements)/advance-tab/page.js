import BackToTop from "@/app/backToTop";
import AdvanceTabPage from "./(advance-tab)";

export const metadata = {
  title: "Advance Tab - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AdvanceTabLayout = () => {
  return (
    <>
      <AdvanceTabPage />

      <BackToTop />
    </>
  );
};

export default AdvanceTabLayout;
