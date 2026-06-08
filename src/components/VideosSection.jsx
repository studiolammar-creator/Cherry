import styles from './VideosSection.module.css'

export default function VideosSection() {
  return (
    <>
      {/* Row 1: Long form videos */}
      <div className={styles.row}>
        <div className={styles.imagePanel}>
          <img
            className={styles.coverImg}
            src="/assets/longform-image.png"
            alt="Long form video preview"
          />
        </div>

        <div className={`${styles.textPanel} ${styles.dark}`}>
          <img className={styles.panelBg} src="/assets/longform-bg.svg" alt="" aria-hidden />
          <div className={styles.panelContent}>
            <div className={styles.videoHeading}>
              <p className={styles.videoSubtitle}>Videos</p>
              <p className={styles.videoTitle}>Long form videos</p>
            </div>
            <p className={styles.videoDesc}>
              Watch my playthroughs and shouting vibes during my long form videos
            </p>
            <button className={`${styles.outlineBtn} ${styles.lightOutline}`}>
              Watch my long form youtube videos
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Short form videos */}
      <div className={styles.row}>
        <div className={`${styles.textPanel} ${styles.light}`}>
          <div className={styles.panelContent}>
            <div className={styles.videoHeading}>
              <p className={`${styles.videoSubtitle} ${styles.dark}`}>Videos</p>
              <p className={`${styles.videoTitle} ${styles.darkText}`}>Short form videos</p>
            </div>
            <p className={`${styles.videoDesc} ${styles.darkText}`}>
              Watch my playthroughs and shouting vibes during my long form videos
            </p>
            <button className={`${styles.outlineBtn} ${styles.darkOutline}`}>
              Watch my short form youtube videos
            </button>
          </div>
        </div>

        <div className={styles.imagePanel}>
          <img
            className={styles.coverImg}
            src="/assets/shortform-image.png"
            alt="Short form video preview"
          />
        </div>
      </div>
    </>
  )
}
