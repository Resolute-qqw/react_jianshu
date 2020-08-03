import React, { Component, Fragment } from 'react'
import { GlobalStyled } from './style.js'
import { FontSizeStyle } from './font/iconfont.js'

import Header from './common/header'
class App extends Component {

  render() {
    return (
      <Fragment>
        <FontSizeStyle />
        <GlobalStyled />
        <Header />
      </Fragment>
    )
  }
}

export default App