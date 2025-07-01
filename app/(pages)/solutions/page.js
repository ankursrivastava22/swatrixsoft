import BackToTop from "@/app/backToTop";
import SolutionProvider from "./(solutions)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SolutionProviderLayout = () => {
  return (
    <>
      <SolutionProvider />

      <BackToTop />
    </>
  );
};

export default SolutionProviderLayout;
