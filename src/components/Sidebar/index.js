import './index.scss'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
        </Link>
        <nav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://np.linkedin.com/in/sushan-sunuwar"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="google.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="google.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/koinchsushan"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
