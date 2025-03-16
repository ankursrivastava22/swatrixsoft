import SingleProductPage from "../index";

export const metadata = {
  title: "Single Product - Web Development Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const SingleProductLayout = ({ params }) => {
  return (
    <>
      <SingleProductPage getParams={params} />
    </>
  );
};

export default SingleProductLayout;
