import { Link } from 'react-router-dom'

function Navbar() {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarSupportedContent')
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement

    if (navbarCollapse?.classList.contains('show')) {
      navbarToggler?.click()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/story" onClick={closeNavbar}>My Story</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/questions" onClick={closeNavbar}>Q&A</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learnmore" onClick={closeNavbar}>Learn More</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
