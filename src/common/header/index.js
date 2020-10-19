import React, { Component } from "react";
import style from './index.module.scss'

class Header extends Component {
  render() {
    return (
      <div className={style.headerWrapper}>
        <div className={style.logo} />
        <div className={style.container}>
          <div className={`${style.active} ${style.tab}`}>首页</div>
          <div className={style.tab}>下载App</div>
          <input className={style.search} />
        </div>
        <div className={style.functionBlock}>
          <div className={style.typeface}>
            <i className="iconfont">&#xe636;</i>
          </div>
          <div className={style.betaBox}>
            <img src={require('../../statics/images/beta.png')} alt="" className={style.beta} />
          </div>
          <div className={style.login}>
            登录
          </div>
          <div className={style.register}>
            注册
          </div>
          <div className={style.writing}>
            <i className="iconfont feather">&#xe708;</i>
            写文章
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
