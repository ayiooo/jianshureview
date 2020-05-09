import React, { Component } from 'react';
// 使用 connect 连接redux
import {connect} from 'react-redux'
// 引入actionCreator
import {
  actionCreator
} from './store'
// 引入 link 
import {Link} from 'react-router-dom'
// 引入 styled 组件
import {
  HeaderContainer,
  Logo,
  Center,
  NavItem,
  SearchWrapper,
  SearchInput,
  Addition,
  Button
} from './style'


class Header extends Component {
  render() {
    const {isFocus, changeIsFocus} = this.props
    console.log(isFocus, changeIsFocus)
    return (
      <HeaderContainer>
        <Link to="/"><Logo/></Link>
        {/* center */}
        <Center>
          <NavItem className=" left active ">首页</NavItem>
          <NavItem className=" left ">下载App</NavItem>
          {/* 搜索框 */}
          <SearchWrapper>
            <SearchInput className={ isFocus? 'active': ''} onFocus={changeIsFocus}
            onBlur={changeIsFocus}/><i className={ isFocus? 'iconfont mag active': 'iconfont mag'}>&#xe637;</i> 
          </SearchWrapper>
          {/* float */}
          <NavItem className=" right ">登录</NavItem>
          <NavItem className=" right diamond"></NavItem>
          <NavItem className=" right ">Aa</NavItem>
        </Center>
        {/* 右侧 */}
        <Addition>
          <Button class="register"n>注册</Button>
          <Button class="write"><i className="iconfont pen">&#xe62b;</i>写文章</Button>
        </Addition>
      </HeaderContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFocus: state.getIn(['header', 'isFocus'])
  }
}

const mapActionToProps = (dispatch) => {
  return {
    changeIsFocus() {
      const action = actionCreator.changeFocusAction()
      console.log(action)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapActionToProps)(Header);