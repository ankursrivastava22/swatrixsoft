import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comment = ({ comnt }) => {
  return (
    <>
      <li className="comment">
        <div className="comment-body">
          <div className="single-comment">
            <div className="comment-img">
              <Image
                src={comnt.img}
                width={70}
                height={70}
                priority
                alt="Author Images"
              />
            </div>
            <div className="comment-inner">
              <h6 className="commenter">
                <Link href="#">{comnt.name}</Link>
              </h6>
              <div className="comment-meta">
                <div className="time-spent">{comnt.date}</div>
                <div className="reply-edit">
                  <div className="reply">
                    <Link className="comment-reply-link" href="#">
                      Reply
                    </Link>
                  </div>
                </div>
              </div>
              <div className="comment-text">
                <p className="b2">{comnt.desc}</p>
              </div>
            </div>
          </div>
        </div>
        {comnt.children &&
          comnt.children.map((child, childIndex) => (
            <ul className="children" key={childIndex}>
              <li className="comment">
                <div className="comment-body">
                  <div className="single-comment">
                    <div className="comment-img">
                      <Image
                        src={child.img}
                        width={70}
                        height={70}
                        priority
                        alt="Author Images"
                      />
                    </div>
                    <div className="comment-inner">
                      <h6 className="commenter">
                        <Link href="#">{child.name}</Link>
                      </h6>
                      <div className="comment-meta">
                        <div className="time-spent">{child.date}</div>
                        <div className="reply-edit">
                          <div className="reply">
                            <Link className="comment-reply-link" href="#">
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="comment-text">
                        <p className="b2">{child.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
      </li>
    </>
  );
};

export default Comment;
