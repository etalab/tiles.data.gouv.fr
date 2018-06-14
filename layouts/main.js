import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'

import piwik from '../lib/piwik'

import Meta from '../components/meta'
import MainStyle from '../components/main-style'
import Header from '../components/header'
import Footer from '../components/footer'

class Layout extends React.Component {
  componentDidMount() {
    const {router} = this.props

    setTimeout(() => {
      piwik.track(router)
    }, 400)
  }

  render() {
    const {title, description, children} = this.props

    return (
      <div>
        <Meta title={title} description={description} />
        <MainStyle />
        <Header />
        <main>
          {children}
        </main>
        <Footer />

        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #fff;
          }

          main {
            flex: 1;
          }
        `}</style>

        <script src='https://cdn.polyfill.io/v2/polyfill.min.js?features=Array.prototype.includes,modernizr:es6string,modernizr:es6array,Promise,fetch' />
        <script async defer src='https://buttons.github.io/buttons.js' />
      </div>
    )
  }
}

Layout.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
}

Layout.defaultProps = {
  children: null,
  title: null,
  description: null
}

export default withRouter(Layout)
