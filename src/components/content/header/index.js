import React, { Component, Fragment } from 'react';
import {
  HeaderContainer,
  NavLogo,
  NavBar,
  NavBarItem,
  SearchWrapper,
  SearchInput,
  Button,
} from './style';
class Header extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer>
          {/* 左边logo */}
          <NavLogo />
          {/* 中间 */}
          <NavBar>
            <div className='left'>
              <NavBarItem className='active'>
                <i className='iconfont'>&#xe632;</i>
                <span className='title'>首页</span>
              </NavBarItem>
              <NavBarItem className='download'>
                <i className='iconfont'>&#xe69c;</i>
                <span className='title'>下载App</span>
              </NavBarItem>
              {/* 搜索 */}
              <SearchWrapper>
                <SearchInput />
                <i className='iconfont search'>&#xe637;</i>
              </SearchWrapper>
            </div>
            <div className='right'>
              {/* 模式 */}
              <NavBarItem>
                <i className='iconfont'>&#xe636;</i>
              </NavBarItem>
              {/*  */}
              <NavBarItem className='diamond' />
              <NavBarItem>
                <a>登录</a>
              </NavBarItem>
            </div>
          </NavBar>
          {/* 右边 */}
          <Button>注册</Button>
          <Button className='write'>
            <i class='iconfont'>&#xe62b;</i>
            <span>写文章</span>
          </Button>
        </HeaderContainer>
      </Fragment>
    );
  }
}

export default Header;
