"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const PostFormatQuoteLayout = ({ params }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/post-format-quote/blog-1");
  }, []);
};

export default PostFormatQuoteLayout;
