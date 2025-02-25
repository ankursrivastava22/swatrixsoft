"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Profile = ({ params }) => {
  const router = useRouter();
  const postId = params.profileId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/profile/1");
    }
  }, []);
};

export default Profile;
