import BackToTop from "@/app/backToTop";
import MVPPage from "./(mvp-development)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const MVPPageLayout = () => {
  return (
    <>
      <MVPPage />

      <BackToTop />
    </>
  );
};

export default MVPPageLayout;
