import BackToTop from "@/app/backToTop";
import SingleCoursePage from "./index";

export const metadata = {
  title:
    "Course Filter One Toggle - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const Page = ({ params }) => {
  return (
    <>
      <SingleCoursePage getParams={params} />

      <BackToTop />
    </>
  );
};

export default Page;
