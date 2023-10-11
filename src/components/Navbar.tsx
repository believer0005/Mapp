import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './Sidebar';
import { Bookmark } from './Bookmark'
import { useState } from 'react';
function Navbar() {

  const [showNav, setshowNav] = useState(false)
  const [showBookmark, setsBookmark] = useState(false)

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              Movies Hub
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                  <button className="nav-link" onClick={() => setshowNav(!showNav)}>
                    Watch List
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={() => setsBookmark(!showBookmark)}>
                    BookMark
                  </button>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {showNav && <Sidebar showSide={showNav} />}
      {showBookmark && <Bookmark showBook={showBookmark} />}

    </div>
  );
}

export default Navbar;

