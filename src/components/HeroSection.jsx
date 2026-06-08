import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <img className={styles.unionBg} src="/assets/union-bg.svg" alt="" aria-hidden />

      <div className={styles.photoContainer}>
        <img className={styles.photo} src="/assets/hero-photo.png" alt="Cherry" />
      </div>

      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <p className={styles.tagline}>Belgian FPS &amp; Variety creator</p>
          <div className={styles.nameRow}>
            <img className={styles.logo} src="/assets/cherry-logo.png" alt="Cherry logo" />
            <p className={styles.name}>Cherry</p>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.bio}>
            <p>
              Cherry is a Belgian FPS &amp; variety creator known for high-energy livestreams,
              competitive gameplay and entertaining community-driven content.
            </p>
            <br />
            <p>
              With an ex-competitive FPS background and a strong Benelux audience, Cherry creates
              engaging content focused on multiplayer chaos, FPS highlights, survival games,
              upcoming releases and authentic live reactions.
            </p>
            <br />
            <p>
              From Call of Duty and DayZ to discovering new games and covering exciting upcoming
              titles, the goal is always to create entertaining and memorable content.
            </p>
          </div>

          <a
            href="mailto:cherry.partnership@gmail.com"
            className={styles.ctaBtn}
          >
            Get in contact with me
          </a>
        </div>
      </div>
    </section>
  )
}
