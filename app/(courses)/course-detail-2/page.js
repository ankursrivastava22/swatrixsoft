"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const CourseLayout = ({ params }) => {
  const router = useRouter();
  const postId = params.courseId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/course-card-2");
    }
  }, []);
};

export default CourseLayout;
