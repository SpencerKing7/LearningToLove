function Footer() {
  return (
    <footer className="py-3 bg-dark">
      <div className="container">
        <p className="mb-0 text-center text-white">
          Spencer King &#x2022; <span className="footer-date">January 2, 2024</span>
        </p>
        <p className="text-center text-white mb-0">
          <a className="text-white icon" href="https://www.instagram.com/spencerking.7/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a className="text-white icon" href="https://www.facebook.com/spencer.king.10/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square fa-lg"></i>
          </a>
          <a className="text-white icon" href="https://open.spotify.com/user/spener7king?si=3dc87484fd1442e9" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify fa-lg"></i>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
