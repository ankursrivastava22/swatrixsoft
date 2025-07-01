import BackToTop from "@/app/backToTop";
import Webdevelopment from "./(ai-services)";
import AIServicePage from "./(ai-services)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AIServiceLayout = () => {
  return (
    <>
      <AIServicePage />

      <BackToTop />
    </>
  );
};

export default AIServiceLayout;
