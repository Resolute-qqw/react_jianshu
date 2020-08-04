import styled from "styled-components";
import navLogo from "../../statics/images/nav-logo.png";
import BetaImg from "../../statics/images/beta.png";
export const HeaderWrapper = styled.div`
  height: 58px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #f0f0f0;
  .iconfont.feather {
    margin-right: 3px;
  }
`;
export const Logo = styled.a`
  position: absolute;
  left: 0;
  width: 100px;
  height: 100%;
  display: block;
  box-sizing: border-box;
  background-image: url(${navLogo});
  background-size: cover;
`;
export const Container = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  .active {
    color: #ea6f5a;
  }
  @media (max-width: 1120px){
    width: 750px;
  }
  @media (max-width: 900px){
    width: 600px;
  }
`;
export const Tab = styled.a`
  display: inline-block;
  font-size: 17px;
  padding: 0 15px;
  height: 100%;
  line-height: 57px;
  box-sizing: border-box;
`;
export const Serach = styled.input`
  width: 160px;
  height: 38px;
  padding-left: 20px;
  padding-right: 40px;
  margin-left: 15px;
  border: 1px solid #eee;
  border-radius: 40px;
  outline: none;
  font-size: 14px;
  color: rgb(51, 51, 51);
`;
export const FunctionBlock = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 435px;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Typeface = styled.a`
  padding: 0 10px;
  display: inline-block;
  cursor: pointer;
  i {
    font-size: 24px;
    color: #969696;
  }
`;
export const BetaBox = styled.a`
  padding: 0 12px;
  display: inline-block;
`;
export const Beta = styled.img.attrs({
  src: BetaImg,
})`
  cursor: pointer;
  height: 25px;
  display: inline-block;
`;
export const Login = styled.div`
  padding: 0 19px 0 23px;
  color: #969696;
  font-size: 15px;
  cursor: pointer;
`;
export const Register = styled.div`
  width: 80px;
  height: 38px;
  margin: 0 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  line-height: 38px;
  font-size: 15px;
  color: #ea6f5a;
`;
export const Writing = styled.div`
  width: 100px;
  height: 40px;
  margin: 0 12px 0;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 38px;
  font-size: 15px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
`;
