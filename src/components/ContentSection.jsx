import styles from './ContentSection.module.css'

function SectionHeading({ subtitle, title }) {
  return (
    <div className={styles.heading}>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

const contentFocusItems = [
  'Community-driven entertainment',
  'FPS gameplay and highlights',
  'Variety gaming',
  'Multiplayer chaos',
  'Upcoming game discovery and coverage',
  'Livestream reactions',
  'Short-form content',
]

const stats = [
  {
    platform: 'Twitch',
    items: [
      '3,641 followers',
      '74 average viewers (last 30 days)',
      'Partnered on Twitch',
    ],
  },
  {
    platform: 'TikTok',
    items: ['74.6K video views (last 30 days)', '3K followers'],
  },
  {
    platform: 'YouTube',
    items: ['401 subscribers', '51K monthly views'],
  },
]

export default function ContentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <SectionHeading subtitle="Creating" title="Content focus" />
        <BulletList items={contentFocusItems} />
      </div>

      <div className={styles.right}>
        <SectionHeading subtitle="Creating" title="Stats" />
        {stats.map((s) => (
          <div key={s.platform} className={styles.statBlock}>
            <p className={styles.platform}>{s.platform}</p>
            <BulletList items={s.items} />
          </div>
        ))}
      </div>
    </section>
  )
}
