import BackToTop from "@/app/backToTop";
import SingleEvent from "../index";

export const metadata = {
  title: "Event Details - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SingleEventLayout = ({ params }) => {

  return (
    <>
      <SingleEvent getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleEventLayout;
