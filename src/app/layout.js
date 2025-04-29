import '../styles/global.css';
import '../styles/footer.css';

export const metadata = {
  title: 'Jandojegs Website',
  description: 'Welcome to Jandojegs!'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <nav>
            <a href="/">Home</a>
            <a href="/contact">Contact Us</a>
            <a href="/learn">Learn</a>
            <a href="/about">About Us</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="social-media-buttons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
