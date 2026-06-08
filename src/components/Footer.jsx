import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>©2026</p>
      <p className={styles.tagline}>Made with the sweetness and loudness of a shouting cherry</p>
    </footer>
  )
}
