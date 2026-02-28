"use client";

import { useState } from "react";
import { MentaloLogo } from "./mentalo-logo";
import styles from "../page.module.css";

export function LandingLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="mailto:info@ateliers-mentalo.ch"
      className={styles.landingLink}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className={styles.landingLogoWrap}>
        <MentaloLogo
          isHovered={isHovered}
          className={styles.landingLogo}
          aria-hidden="true"
          focusable="false"
        />
      </div>

      <div className={styles.landingCard}>
        <div className={styles.landingHeading}>
          <h2 className={styles.landingEyebrow}>Les ateliers</h2>
          <h1 className={styles.landingTitle}>Mentalo</h1>
        </div>
        <span className={styles.landingContact}>Contact</span>
      </div>
    </a>
  );
}
