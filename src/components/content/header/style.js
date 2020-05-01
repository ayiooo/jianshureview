// https://github.com/styled-components/styled-components
import styled from 'styled-components';
// 引入静态资源文件 nav-logo.png,可以像使用模板变量一样使用
import navlogo from '../../../assets/images/nav-logo.png';
import navbeta from '../../../assets/images/nav_beta.png';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 40.5px;
`;

// 设置 background-image 的时候 一定要设置 容器的宽高，要不不显示！！！
export const NavLogo = styled.div`
  float: left;
  width: 100px;
  height: 56px;
  background-image: url(${navlogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 945px;
  height: 100%;
  margin: 0 auto;
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
  a:hover {
    color: blue;
  }
`;

export const NavBarItem = styled.div`
  line-height: 55px;
  padding: 0 10px;
  font-size: 17px;
  cursor: pointer;
  .iconfont {
    font-size: 20px;
    margin-right: 3px;
  }
  &.active {
    color: #ea6f5a;
  }
  &.download {
    &:hover {
      background-color: #f5f5f5;
    }
  }
  &.diamond {
    background: url(${navbeta}) no-repeat;
    background-size: contain;
    padding: 0;
    width: 60px;
    height: 25px;
  }
`;

export const SearchWrapper = styled.div`
  position: reative;
  display: flex;
  align-items: center;
  .search {
    margin-left: -33px;
    font-size: 20px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 25px;
    text-align: center;
    &.active {
      color: #fff;
      background: rgb(150, 150, 150);
    }
  }
`;

export const SearchInput = styled.input.attrs({
  placeholder: '搜索',
})`
  box-sizing: border-box;
  width: 240px;
  height: 34px;
  line-height: 34px;
  outline: none;
  border-style: none;
  background: #eee;
  border-radius: 17px;
  padding: 0 40px 0 20px;
  transition: all 0.3s;
  &:focus {
    width: 320px;
  }
`;

export const Button = styled.span`
  cursor: pointer;
  border: 1px solid #ea6f5a;
  line-height: 34px;
  color: #ea6f5a;
  padding: 0 15px;
  border-radius: 17px;
  &.write {
    background: #ea6f5a;
    color: #fff;
    margin-left: 10px;
    .iconfont {
      margin-right: 3px;
    }
  }
`;
