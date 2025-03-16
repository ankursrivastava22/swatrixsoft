import BackToTop from "@/app/backToTop";
import SingleEvent from "../index";

export const metadata = {
  title: "Event Details - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
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
