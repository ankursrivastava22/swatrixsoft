import BackToTop from "@/app/backToTop";
import NewsletterPage from "./(newsletter)";

export const metadata = {
  title: "Newsletter - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
