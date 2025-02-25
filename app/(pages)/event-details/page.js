"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const EventLayout = ({ params }) => {
  const router = useRouter();
  const postId = params.eventId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/event-list");
    }
  }, []);
};

export default EventLayout;
