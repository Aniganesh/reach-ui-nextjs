import { Dialog } from "@reach/dialog";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "../styles/onboarding.module.css";
import "@reach/dialog/styles.css";
import { onboardingVideos } from "../constants/onboarding";
import FadeIn from "../Components/FadeIn/FadeIn";
import clsx from "clsx";

interface OnboardingProps {}

const Onboarding: FC<OnboardingProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <button onClick={() => setOpen(true)} className={styles.button}>
          Open onboarding tutorial videos
        </button>
      </div>
      {isOpen ? (
        <Dialog
          isOpen={isOpen}
          onDismiss={() => setOpen(false)}
          className={styles.dialog}
          aria-label="onboarding videos dialog"
        >
          <button
            className={`${styles.closeButton} ${styles.button}`}
            onClick={() => setOpen(false)}
          >
            close
          </button>
          <div className={styles.actionAndVideosContainer}>
            <button
              className={clsx(styles.actionButton, styles.leftAction)}
              onClick={() => {
                setCurrentIndex(
                  currentIndex === 0
                    ? onboardingVideos.length - 1
                    : currentIndex - 1
                );
              }}
            >
              &lt;
            </button>
            <div className={styles.onboardingVideosContainer}>
              {onboardingVideos.map((item, index) => (
                <FadeIn key={item.url} visible={index === currentIndex}>
                  <iframe
                    src={item.url}
                    height="720"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {item.src}
                </FadeIn>
              ))}
            </div>
            <button
              onClick={() => {
                setCurrentIndex((currentIndex + 1) % onboardingVideos.length);
              }}
              className={clsx(styles.actionButton, styles.rightAction)}
            >
              &gt;
            </button>
          </div>
        </Dialog>
      ) : null}
    </>
  );
};

export default Onboarding;
