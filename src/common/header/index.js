import React,{ Component } from 'react'
import { 
    HeaderWrapper,
    Logo,
    Container,
    FunctionBlock,
    Tab,
    Serach,
    Typeface,
    Bate,
    Login,
    Register,
    Writing
} from './style'

class Header extends Component {
       
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Container>
                    <Tab className="active">
                        首页
                    </Tab>
                    <Tab>
                        下载App
                    </Tab>
                    <Serach>
                    </Serach>
                </Container>
                <FunctionBlock>
                    <Typeface>
                        <i class="iconfont">&#xe636;</i>
                    </Typeface>
                    <Bate />
                    <Login />
                    <Register />
                    <Writing />
                </FunctionBlock>
            </HeaderWrapper>
        )
    }
     
}
export default Header