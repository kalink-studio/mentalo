import React from "react";
import { MentaloLogo } from "./components/mentalo-logo";
import { PartnerLogo } from "./components/partner-logo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles.landingFrame}>
        <div className={styles.landingContent}>
          <div className={styles.landingHeader}>
            <div
              className={[
                styles.landingStatus,
                styles.landingStatusYellow,
              ].join(" ")}
            >
              <span className={styles.landingStatusDot}></span>
              EN COURS DE CRÉATION
            </div>
          </div>

          <div className={styles.landingHero}>
            <div className={styles.landingLogoWrap}>
              <MentaloLogo
                className={styles.landingLogo}
                aria-hidden="true"
                focusable="false"
              />
            </div>

            <a
              href="mailto:info@ateliers-mentalo.ch"
              className={styles.landingLink}
            >
              <div className={styles.landingCard}>
                <h2 className={styles.landingEyebrow}>Les ateliers</h2>
                <h1 className={styles.landingTitle}>Mentalo</h1>
                <span className={styles.landingContact}>contact</span>
              </div>
            </a>
          </div>

          <div className={styles.landingFooter}>
            <div className={styles.landingPartner}>
              <PartnerLogo
                className={styles.landingPartnerLogo}
                aria-hidden="true"
                focusable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
