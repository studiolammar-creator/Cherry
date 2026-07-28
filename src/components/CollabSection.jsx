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
  { src: '/assets/icon-tiktok.svg', alt: 'TikTok', href: 'https://www.tiktok.com/@cherrayy_' },
  { src: '/assets/icon-youtube.svg', alt: 'YouTube', href: 'https://www.youtube.com/@CH3RRYYT' },
  { src: '/assets/icon-twitch.svg', alt: 'Twitch', href: 'https://www.twitch.tv/cherrayy_' },
  { src: '/assets/icon-discord.svg', alt: 'Discord', href: 'https://discord.gg/BWqhrnuUFK' },
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
          <a
            href="mailto:cherry.partnership@gmail.com"
            className={styles.solidBtn}
          >
            Get in contact with me
          </a>
          <a
            href="https://drive.google.com/drive/folders/1dUSmnSzRJ01qhECvy1ayc4O3RZkydHhb?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.outlineBtn}
          >
            Take a look at my media kit
          </a>
        </div>

        <div className={styles.socialIcons}>
          {socialIcons.map((icon) => (
            <a
              key={icon.alt}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.alt}
            >
              <img className={styles.icon} src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
