import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <Link href="https://facebook.com/jandojegs">
          <a target="_blank">Facebook</a>
        </Link>
        <Link href="https://instagram.com/jandojegs">
          <a target="_blank">Instagram</a>
        </Link>
        <Link href="https://twitter.com/jandojegs">
          <a target="_blank">X</a>
        </Link>
        <Link href="https://tiktok.com/@jandojegs">
          <a target="_blank">TikTok</a>
        </Link>
      </div>
    </footer>
  );
}
