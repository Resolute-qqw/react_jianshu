import React, { Component, Fragment } from 'react'
import './global.module.css'
import { FontSizeStyle } from './font/iconfont.js'

import Header from './common/header'
import CssModules from './common/cssModules'
class App extends Component {

  render() {
    return (
      <Fragment>
        <FontSizeStyle />
        <Header />
        <CssModules />
      </Fragment>
    )
  }
}

export default App