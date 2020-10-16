import React, { Component, Fragment } from 'react'
import './global.css'
import { FontSizeStyle } from './font/iconfont.js'

import Header from './common/header'
class App extends Component {

  render() {
    return (
      <Fragment>
        <FontSizeStyle />
        <Header />
      </Fragment>
    )
  }
}

export default App