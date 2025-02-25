"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import GalleryData from "../../data/elements/gallery.json";

const Gallery = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".child-gallery-single",
        numeration: true,
        infinigall: true,
        spinner: "rotating-plane",
      });
    });
  }, []);
  return (
    <div className="row g-0 parent-gallery-container">
      {GalleryData &&
        GalleryData.gallery.map((data, index) => (
          <Link
            className="child-gallery-single col-lg-2 col-md-4 col-sm-6 col-6"
            key={index}
            href={`${data.img}`}
            data-gall="gallery01"
          >
            <div className="rbt-gallery">
              <Image
                className="w-100"
                src={data.img}
                width={253}
                height={274}
                alt="Gallery Images"
              />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Gallery;
