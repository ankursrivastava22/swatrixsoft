"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const BlogLayout = ({ params }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/blog-minimal");
  }, []);
};

export default BlogLayout;
