import Link from 'next/link'
import FaBars from 'react-icons/lib/fa/bars'

import theme from '../styles/theme'

import Dropdown from './dropdown'

const links = [
  {text: 'Documentation', href: '/documentation'}
]

export default () => (
  <nav className='nav'>
    <div className='nav__container'>

      <Link href='/'>
        <a className='nav__link'>
          <img className='nav__logo' src='/static/images/logos/logo-tiles.svg' alt='Accueil de tiles.data.gouv.fr' />
        </a>
      </Link>

      <ul className='nav__links'>
        {links.map(link => (
          <li key={link.text}>
            <Link href={link.href}><a>{link.text}</a></Link>
          </li>
        ))}
      </ul>

      <div className='hamburger-menu'>
        <Dropdown title={<FaBars />} links={links} />
      </div>

    </div>

    <style jsx>{`
      .nav {
        border-bottom: 1px solid ${theme.boxShadow};
        box-shadow: 0 1px 4px ${theme.boxShadow};
        width: 100%;
        background: #fff;
        z-index: 100;
      }

      .nav-fixed {
        position: fixed;
        top: 0;
      }

      .nav__container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
      }

      .nav__logo {
        height: 70px;
        padding: 1em;
      }

      .nav__links {
        display: flex;
        flex-flow: wrap;
        margin: 0;
        padding: 1em;
        list-style-type: none;
        text-align: right;
      }

      .nav__links li {
        padding: 0;
        display: inline;
      }

      .nav__links a,
      .nav__links .dropdown {
        color: ${theme.colors.black};
        padding: 0.4em 0.8em;
        border-radius: 3px;
      }

      .nav__links a::after {
        content: none;
      }

      .nav__links a:hover,
      .nav__links .dropdown:hover {
        background: ${theme.lightGrey};
        transition: background ease-out 0.5s;
      }

      .nav__links a.active {
        background: ${theme.primary};
        color: ${theme.colors.white};
      }

      .hamburger-menu {
        display: none;
      }

      @media (max-width: 700px) {
        .nav__links {
          display: none;
        }

        .hamburger-menu {
          display: block;
          margin: 1em;
        }
      }

      @media (max-width: 380px) {
        .nav__logo {
          height: 60px;
        }
      }
  `}</style>
  </nav>
)
