"use client";

import styles from "./Slideshow.module.css";
import Slider, { CustomArrowProps } from "react-slick";
import RoundButton from "../RoundButton/RoundButton";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";

function Arrow(props: { direction: "left" | "right" } & CustomArrowProps) {
  return (
    <RoundButton
      onClick={props.onClick}
      disabled={
        (props.currentSlide === props.slideCount! - 1 &&
          props.direction === "right") ||
        (props.currentSlide === 0 && props.direction === "left")
      }
      className={clsx(
        styles.arrow,
        props.direction === "right" && styles.right,
      )}
    >
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.39205 10.6023L5.36932 9.59091L8.92045 6.03977H0V4.5625H8.92045L5.36932 1.01705L6.39205 0L11.6932 5.30114L6.39205 10.6023Z"
          fill="currentColor"
        />
      </svg>
    </RoundButton>
  );
}

function useSuspendedWindowWidth() {
  const promise = useRef<Promise<number> | null>(null);
  const { width } = useWindowSize();

  promise.current = new Promise((resolve) => {
    if (width) {
      resolve(width);
    }
  });

  throw promise.current;
}

export default function Slideshow(props: {
  images: Array<{
    url: StaticImageData;
    caption: string;
  }>;
  height: number;
  mobileHeight?: number;
  className?: string;
}) {
  const width = useSuspendedWindowWidth();
  const isMobile = width < 768;

  return (
    <div
      className={clsx(styles.slideshow, props.className)}
      key={isMobile ? "mobile" : "desktop"}
    >
      <Slider
        prevArrow={<Arrow direction="left" />}
        nextArrow={<Arrow direction="right" />}
        dots={true}
        infinite={false}
        key={width}
      >
        {props.images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <Image
              className={styles.img}
              height={
                isMobile && props.mobileHeight
                  ? props.mobileHeight
                  : props.height
              }
              src={image.url}
              alt=""
            />
            <p className={styles.caption}>{image.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
