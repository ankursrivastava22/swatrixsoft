import BackToTop from "@/app/backToTop";
import ConsultingPage from "./(it-consulting)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const ConsultingPageLayout = () => {
  return (
    <>
      <ConsultingPage />

      <BackToTop />
    </>
  );
};

export default ConsultingPageLayout;
