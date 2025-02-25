"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import videoImg1 from "../../public/images/others/video-01.jpg";
import videoImg2 from "../../public/images/others/video-02.jpg";
import videoImg3 from "../../public/images/others/video-03.jpg";
import videoImg4 from "../../public/images/others/video-04.jpg";

import ColorButton from "./ButtonProps/ColorButton";
import HoverButton from "./ButtonProps/HoverButton";
import SectionHead from "./ButtonProps/SectionHead";

const Button = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      <ColorButton
        head={
          <SectionHead
            textBg="bg-primary-opacity"
            title="Color Variation."
            text="Button Color"
          />
        }
        btnText="Histudy Button"
        classOne="rbt-button-area rbt-section-gap bg-color-white"
        btnClassOne=""
        btnClassTwo="btn-secondary"
        btnClassThree="btn-coral"
        btnClassFour="btn-violet"
        btnClassFive="btn-white"
        btnClassSix="btn-pink"
        lastbtn={true}
      />
      <ColorButton
        head={
          <SectionHead
            textBg="bg-primary-opacity"
            title="Border Variation."
            text="Button Border"
          />
        }
        btnText="Histudy Button"
        classOne="rbt-button-area rbt-section-gapBottom bg-color-white"
        btnClassOne="btn-border square"
        btnClassTwo="btn-border"
        btnClassThree="btn-border radius-round-6"
        btnClassFour="btn-border radius-round-10"
        btnClassFive="btn-border radius-round"
        lastbtn={false}
      />

      <div className="rbt-button-area rbt-section-gap bg-color-darker">
        <div className="container">
          <SectionHead
            textBg="bg-white-opacity"
            title="Dark BG Border variation."
            text="Button Border"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link
                  className="rbt-btn btn-border radius-round color-white-off"
                  href="#"
                >
                  Histudy Button
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gap bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-primary-opacity"
            title="Gradients Variation."
            text="Button Gradients"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link className="rbt-btn btn-gradient" href="#">
                  Gradient Button
                </Link>
                <Link className="rbt-btn btn-gradient btn-gradient-2" href="#">
                  Gradient Button
                </Link>
                <Link className="rbt-btn btn-gradient btn-gradient-3" href="#">
                  Gradient Button
                </Link>
              </div>
              <div className="rbt-button-group mt--50">
                <Link className="btn-underline-gradient" href="#">
                  Gradient Button
                </Link>
                <Link className="rbt-btn-link" href="#">
                  Learn More<i className="feather-arrow-right"></i>
                </Link>
                <Link className="transparent-button" href="#">
                  Learn More
                  <i>
                    <svg
                      width="17"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fillRule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                        <path strokeLinecap="square" d="M.663 5.572h14.594" />
                      </g>
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-primary-opacity"
            title="Modern Variation."
            text="Button Modern"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link className="rbt-moderbt-btn" href="#">
                  <span className="moderbt-btn-text">Modern Button</span>
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-primary-opacity"
            title="Hover Animation."
            text="Button Hover"
          />
          <div className="row mt--50">
            <HoverButton
              mt={false}
              SwitchX="Switch X"
              SwitchY="Switch Y"
              MarqueeX="Marquee X"
              MarqueeY="Marquee Y"
              switchBtnOne="rbt-switch-btn"
              switchBtnTwo="rbt-switch-btn rbt-switch-y"
              marqueeBtnOne="rbt-marquee-btn"
              marqueeBtnTwo="rbt-marquee-btn marquee-text-y"
            />
            <HoverButton
              mt={true}
              SwitchX="Switch X"
              SwitchY="Switch Y"
              MarqueeX="Marquee X"
              MarqueeY="Marquee Y"
              switchBtnOne="btn-border rbt-switch-btn"
              switchBtnTwo="btn-gradient rbt-switch-btn rbt-switch-y"
              marqueeBtnOne="btn-white rbt-marquee-btn"
              marqueeBtnTwo="radius rbt-marquee-btn marquee-text-y"
            />
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-primary-opacity"
            title="Icon Hover Animation."
            text="Button Icon"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link className="rbt-btn icon-hover" href="#">
                  <span className="btn-text">Histudy Button</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </Link>
                <Link className="rbt-btn btn-gradient icon-hover" href="#">
                  <span className="btn-text">Histudy Button</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </Link>
                <Link className="rbt-btn btn-border icon-hover" href="#">
                  <span className="btn-text">Histudy Button</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </Link>
                <Link className="rbt-btn btn-white icon-hover" href="#">
                  <span className="btn-text">Histudy Button</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </Link>
                <Link className="rbt-btn btn-white radius icon-hover" href="#">
                  <span className="btn-text">Histudy Button</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-primary-opacity"
            title="Icon Hover Animation."
            text="Button Icon"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link className="rbt-btn hover-icon-reverse" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Histudy Button</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Histudy Button</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rbt-btn btn-border hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Histudy Button</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <Link className="rbt-btn btn-white hover-icon-reverse" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Histudy Button</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rbt-btn btn-white radius hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Histudy Button</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-primary-opacity"
            title="Size Variation."
            text="Button Size"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link className="rbt-btn btn-sm" href="#">
                  Button SM
                </Link>
                <Link className="rbt-btn btn-md" href="#">
                  Button MD
                </Link>
                <Link className="rbt-btn" href="#">
                  Button MD
                </Link>
                <Link className="rbt-btn btn-lg" href="#">
                  Button LG
                </Link>
                <Link className="rbt-btn btn-xl" href="#">
                  Button XL
                </Link>
                <Link className="rbt-btn btn-xxl" href="#">
                  Button XXL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-pink-opacity"
            title="Bg Color Variation."
            text="Button Bg Color"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link className="rbt-btn bg-primary-opacity" href="#">
                  Button Primary
                </Link>

                <Link
                  className="rbt-btn bg-secondary-opacity icon-hover"
                  href="#"
                >
                  <span className="btn-text">Button Secondary</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </Link>

                <Link
                  className="rbt-btn bg-coral-opacity hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Button Coral</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>

                <Link
                  className="rbt-btn bg-violet-opacity rbt-switch-btn"
                  href="#"
                >
                  <span data-text="Button Violet">Button Violet</span>
                </Link>

                <Link
                  className="rbt-btn bg-pink-opacity rbt-marquee-btn"
                  href="#"
                >
                  <span data-text="Button Pink">Button Pink</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-pink-opacity"
            title="Gradient Button."
            text="Button Gradient"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link
                  className="rbt-btn btn-border-gradient hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Histudy Button</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <Link
                  className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round"
                  href="#"
                >
                  <span data-text="Histudy Button">Histudy Button</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-primary-opacity"
            title="Round Button."
            text="Round Button"
          />
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <Link
                  className="rbt-btn rounded-player popup-video"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=gnZ10paNa-c"
                >
                  <span>
                    <i className="feather-play"></i>
                  </span>
                </Link>
                <Link
                  className="rbt-btn btn-border rounded-player popup-video"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                >
                  <span>
                    <i className="feather-play"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-button-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <SectionHead
            textBg="bg-primary-opacity"
            title="Play Button With Image."
            text="Play Button"
          />
          <div className="row mt--50 row--30 gy-5">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={videoImg1}
                  alt="Video Images"
                />
                <Link
                  className="rbt-btn rounded-player-2 popup-video position-to-top with-animation"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                >
                  <span className="play-icon"></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={videoImg2}
                  alt="Video Images"
                />
                <Link
                  className="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-theme-color"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                >
                  <span className="play-icon"></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={videoImg3}
                  alt="Video Images"
                />
                <Link
                  className="rbt-btn rounded-player popup-video position-to-top"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                >
                  <span>
                    <i className="feather-play"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={videoImg4}
                  alt="Video Images"
                />
                <Link
                  className="rbt-btn btn-white rounded-player popup-video position-to-top"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                >
                  <span>
                    <i className="feather-play"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
