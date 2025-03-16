import SingleProfile from "../index";

export const metadata = {
  title: "Profile - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SingleProfileLayout = ({ params }) => {
  return (
    <>
      <SingleProfile getParams={params} />
    </>
  );
};

export default SingleProfileLayout;
