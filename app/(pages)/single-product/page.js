"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const ShopLayout = ({ params }) => {
  const router = useRouter();
  const postId = params.singleId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/shop");
    }
  }, []);
};

export default ShopLayout;
