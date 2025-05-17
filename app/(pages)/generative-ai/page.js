import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(generative-ai)";
import GenerativeAIPage from "./(generative-ai)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const GenerativeAIPageLayout = () => {
  return (
    <>
      <GenerativeAIPage />

      <BackToTop />
    </>
  );
};

export default GenerativeAIPageLayout;
