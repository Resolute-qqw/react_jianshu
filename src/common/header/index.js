import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Container,
  FunctionBlock,
  Tab,
  Serach,
  Typeface,
  BetaBox,
  Beta,
  Login,
  Register,
  Writing,
} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Container>
          <Tab className="active">首页</Tab>
          <Tab>下载App</Tab>
          <Serach></Serach>
        </Container>
        <FunctionBlock>
          <Typeface>
            <i className="iconfont">&#xe636;</i>
          </Typeface>
          <BetaBox>
            <Beta />
          </BetaBox>
          <Login>
            登录
          </Login>
          <Register>
            注册
          </Register>
          <Writing>
            <i className="iconfont feather">&#xe708;</i>
            写文章
          </Writing>
        </FunctionBlock>
      </HeaderWrapper>
    );
  }
}
export default Header;
