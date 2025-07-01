import BackToTop from "@/app/backToTop";
import RPAPage from "./(rpa-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const RPAPageLayout = () => {
  return (
    <>
      <RPAPage />

      <BackToTop />
    </>
  );
};

export default RPAPageLayout;
