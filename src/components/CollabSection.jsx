import styles from './CollabSection.module.css'

const availableFor = [
  'Sponsored streams',
  'Game coverage',
  'Preview access',
  'Early access coverage',
  'Sponsored content',
  'Social media campains',
  'Brand collaboration',
]

const socialIcons = [
  { src: '/assets/icon-tiktok.png', alt: 'TikTok' },
  { src: '/assets/icon-youtube.png', alt: 'YouTube' },
  { src: '/assets/icon-twitch.png', alt: 'Twitch' },
  { src: '/assets/icon-instagram.png', alt: 'Instagram' },
  { src: '/assets/icon-discord.png', alt: 'Discord' },
]

export default function CollabSection() {
  return (
    <section className={styles.section}>
      <img className={styles.bg} src="/assets/collab-bg.svg" alt="" aria-hidden />

      <div className={styles.left}>
        <div className={styles.heading}>
          <p className={styles.subtitle}>Work together</p>
          <p className={styles.title}>Available for</p>
        </div>
        <ul className={styles.list}>
          {availableFor.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.heading}>
          <p className={styles.subtitle}>Work together</p>
          <p className={styles.title}>Contact + Media kit</p>
        </div>

        <div className={styles.buttons}>
          <button className={styles.solidBtn}>Get in contact with me</button>
          <button className={styles.outlineBtn}>Take a look at my media kit</button>
        </div>

        <div className={styles.socialIcons}>
          {socialIcons.map((icon) => (
            <img key={icon.alt} className={styles.icon} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}
