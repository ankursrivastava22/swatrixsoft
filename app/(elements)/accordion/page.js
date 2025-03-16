import BackToTop from "@/app/backToTop";
import AccordionPage from "./(accordion)";

export const metadata = {
  title: "Accordion - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const AccordionLayout = () => {
  return (
    <>
      <AccordionPage />

      <BackToTop />
    </>
  );
};

export default AccordionLayout;
