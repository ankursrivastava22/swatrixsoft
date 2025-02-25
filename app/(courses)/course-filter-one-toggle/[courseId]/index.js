"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";

import CourseDetails from "../../../../data/course-details/courseData.json";

const SingleCoursePage = ({ getParams }) => {
  const router = useRouter();
  const [filteredCourses, setFilteredCourses] = useState([]);

  const courseId = getParams.courseId;
  const slugifiedCourseId = slugify(courseId);

  const getCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));
  const checkMatchCourse = getCourse.filter(
    (course) => slugify(course.category) === slugifiedCourseId
  );

  const matchedCourse = getCourse.find(
    (post) => slugify(post.category) === slugifiedCourseId
  );

  useEffect(() => {
    if (courseId && !matchedCourse) {
      router.push("/course-filter-one-toggle");
    }

    setFilteredCourses(checkMatchCourse);
  }, [getParams.courseId]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <CategoryHead category={filteredCourses[0]} />

          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseFilterOneToggle course={filteredCourses} />
              </div>
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\d+/g, "") // Remove all numeric digits
    .replace("&", "")
    .replace(/\s+/g, " ") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export default SingleCoursePage;
