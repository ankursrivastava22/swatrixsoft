import BackToTop from "@/app/backToTop";
import ConsultantAndStrategyPage from "./(consulting-and-strategy)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const ConsultingStretegyLayout = () => {
  return (
    <>
      <ConsultantAndStrategyPage />

      <BackToTop />
    </>
  );
};

export default ConsultingStretegyLayout;
