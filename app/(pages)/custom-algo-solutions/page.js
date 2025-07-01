import BackToTop from "@/app/backToTop";
import CustomAlgoPage from "./(custom-algo-solutions)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const CustomAlgoPageLayout = () => {
  return (
    <>
      <CustomAlgoPage />

      <BackToTop />
    </>
  );
};

export default CustomAlgoPageLayout;
