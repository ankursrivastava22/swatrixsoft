import BackToTop from "@/app/backToTop";
import AccordionPage from "./(accordion)";

export const metadata = {
  title: "Accordion - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
