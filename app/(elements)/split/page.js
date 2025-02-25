import BackToTop from "@/app/backToTop";
import SplitPage from "./(split)";

export const metadata = {
  title: "Split - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SplitLayout = () => {
  return (
    <>
      <SplitPage />
      <BackToTop />
    </>
  );
};

export default SplitLayout;
