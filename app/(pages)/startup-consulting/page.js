import BackToTop from "@/app/backToTop";
import StartupConsultingPage from "./(startup-consulting)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const StartupConsultingPageLayout = () => {
  return (
    <>
      <StartupConsultingPage />

      <BackToTop />
    </>
  );
};

export default StartupConsultingPageLayout;
