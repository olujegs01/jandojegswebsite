import Image from 'next/image'; // Import for images
import Link from 'next/link';   // Link for routing
import styles from '../styles/Home.module.css'; // Corrected import path

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Jandojegs!</h1>
        <p className={styles.subtitle}>Empowering Your Logistics Solutions</p>
        <Link href="/about" className={styles.ctaButton}>
          Learn More
        </Link>
      </header>

      <section className={styles.featuredSection}>
        <div className={styles.featuredContent}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <p className={styles.sectionDescription}>
            Discover how our AI-powered solutions can optimize your logistics and transportation needs.
          </p>
        </div>

        <div className={styles.featuredImage}>
          <Image
            src="/images/featured-logistics.jpg"
            alt="Logistics and Delivery"
            width={500}
            height={300}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Jandojegs Logistics. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <Link href="https://facebook.com" target="_blank">Facebook</Link>
          <Link href="https://instagram.com" target="_blank">Instagram</Link>
          <Link href="https://twitter.com" target="_blank">Twitter</Link>
          <Link href="https://tiktok.com" target="_blank">TikTok</Link>
        </div>
      </footer>
    </div>
  );
}
