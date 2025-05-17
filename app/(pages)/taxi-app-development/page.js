import BackToTop from "@/app/backToTop";
import TaxiAppPage from "./(taxi-app-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const TaxiAppPageLayout = () => {
  return (
    <>
      <TaxiAppPage />

      <BackToTop />
    </>
  );
};

export default TaxiAppPageLayout;
