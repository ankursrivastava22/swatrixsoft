import BackToTop from "@/app/backToTop";
import MLPage from "./(machine-learning)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const MLPageLayout = () => {
  return (
    <>
      <MLPage />

      <BackToTop />
    </>
  );
};

export default MLPageLayout;
