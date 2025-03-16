import BackToTop from "@/app/backToTop";
import ProgressbarPage from "./(progressbar)";

export const metadata = {
  title: "Progressbar - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
