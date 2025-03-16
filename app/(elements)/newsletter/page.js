import BackToTop from "@/app/backToTop";
import NewsletterPage from "./(newsletter)";

export const metadata = {
  title: "Newsletter - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const NewsletterLayout = () => {
  return (
    <>
      <NewsletterPage />
      <BackToTop />
    </>
  );
};

export default NewsletterLayout;
