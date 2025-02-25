import Image from "next/image";
import { usePathname, useParams } from "next/navigation";

import CourseBreadcrumb from "./Course-Breadcrumb";

import bgImage from "../../../public/images/bg/bg-image-10.jpg";
import CourseBreadcrumbTwo from "./CourseBreadcrumb-Two";

const CourseHead = ({ checkMatch }) => {
  const pathname = usePathname();
  const path = useParams();

  return (
    <>
      {pathname === `/course-detail-2/${path.courseId}` ? (
        <div className="container">
          <div className="row">
            <CourseBreadcrumbTwo getMatchCourse={checkMatch && checkMatch} />
          </div>
        </div>
      ) : (
        <>
          <div className="breadcrumb-inner breadcrumb-dark">
            <Image src={bgImage} alt="Education Images" />
          </div>
          <div className="container">
            <div className="row">
              <CourseBreadcrumb getMatchCourse={checkMatch && checkMatch} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseHead;
