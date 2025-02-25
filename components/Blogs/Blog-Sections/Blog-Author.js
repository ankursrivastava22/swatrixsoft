import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogAuthor = ({ author }) => {
  const { name, about, info, img, social } = author;
  return (
    <>
      <div className="media">
        <div className="thumbnail">
          <Link href="#">
            <Image
              src={img}
              width={105}
              height={105}
              priority
              alt="Author Images"
            />
          </Link>
        </div>
        <div className="media-body">
          <div className="author-info">
            <h5 className="title">
              <Link className="hover-flip-item-wrapper" href="#">
                {name}
              </Link>
            </h5>
            <span className="b3 subtitle">{about}</span>
          </div>
          <div className="content">
            <p className="description">{info}</p>
            <ul className="social-icon social-default icon-naked justify-content-start">
              {social.map((socialItem, innerIndex) => (
                <li key={innerIndex}>
                  <Link href={socialItem.url}>
                    <i className={socialItem.icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAuthor;
