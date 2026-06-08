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
      '3.548 followers',
      '30+ average viewers (last 30 days)',
      '204 peak viewers (last 30 days)',
    ],
  },
  {
    platform: 'TikTok',
    items: ['2.965 followers', '27.4K monthly views'],
  },
  {
    platform: 'YouTube',
    items: ['378 subscribers', '36.6K monthly views'],
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
