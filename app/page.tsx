import { LandingLink } from "./components/landing-link";
import { PartnerLogo } from "./components/partner-logo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles.landingFrame}>
        <div className={styles.landingContent}>
          <div
            className={[
              styles.landingStatus,
              styles.landingStatusYellow,
            ].join(" ")}
          >
            <span className={styles.landingStatusDot}></span>
            EN COURS DE CRÉATION
          </div>

          <LandingLink />

          <PartnerLogo
            className={styles.landingPartnerLogo}
            aria-hidden="true"
            focusable="false"
          />
        </div>
      </div>
    </div>
  );
}
