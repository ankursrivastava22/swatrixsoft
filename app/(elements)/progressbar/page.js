import BackToTop from "@/app/backToTop";
import ProgressbarPage from "./(progressbar)";

export const metadata = {
  title: "Progressbar - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ProgressbarLayout = () => {
  return (
    <>
      <ProgressbarPage />

      <BackToTop />
    </>
  );
};

export default ProgressbarLayout;
