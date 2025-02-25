import BackToTop from "@/app/backToTop";
import AdvanceTabPage from "./(advance-tab)";

export const metadata = {
  title: "Advance Tab - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
