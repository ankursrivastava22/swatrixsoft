import BackToTop from "@/app/backToTop";
import AcademyGallery from "./(academy-gallery)";

export const metadata = {
  title: "Academy Gallery - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const AcademyGalleryLayout = () => {
  return (
    <>
      <AcademyGallery />

      <BackToTop />
    </>
  );
};

export default AcademyGalleryLayout;
