import BackToTop from "@/app/backToTop";
import BlockChainPage from "./(blockchain)";

export const metadata = {
  title: "Web Development - Best website Company in Jodhpur",
  description: "Web Development Company in Jodhpur",
};

const BlockChainPageLayout = () => {
  return (
    <>
      <BlockChainPage />

      <BackToTop />
    </>
  );
};

export default BlockChainPageLayout;
