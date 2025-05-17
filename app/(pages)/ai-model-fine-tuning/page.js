import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(ai-model-fine-tuning)";
import AIModelTuningPage from "./(ai-model-fine-tuning)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AIModelLayout = () => {
  return (
    <>
      <AIModelTuningPage />

      <BackToTop />
    </>
  );
};

export default AIModelLayout;
