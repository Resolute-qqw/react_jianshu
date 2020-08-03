import styled from 'styled-components'
import navLogo from '../../statics/images/nav-logo.png'
export const HeaderWrapper = styled.div`
    height: 58px;
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
    position: absolute;
    left: 0;
    width: 100px;
    height: 100%;
    display: block;
    box-sizing: border-box;
    background-image: url(${navLogo});
    background-size: cover;
`
export const Container = styled.div`
    height: 100%;
    width: 960px;
    margin: 0 auto;
    box-sizing: border-box;
    .active{
        color: #ea6f5a;
    }
`
export const FunctionBlock = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 435px;
    height: 100%;
`
export const Tab = styled.a`
    display: inline-block;
    font-size: 17px;
    padding: 0 15px;
    height: 100%;
    line-height: 57px;
    box-sizing: border-box;
`
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
`
export const Typeface = styled.div`
    padding: 17px 10px;
    display: inline-block;
    cursor: pointer;
    i {
        font-size: 24px;
        color: #969696;
    }
`
export const Bate = styled.div`
    
`
export const Login = styled.div`
    
`
export const Register = styled.div`
   
`
export const Writing = styled.div`
    
`