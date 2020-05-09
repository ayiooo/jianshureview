import styled from 'styled-components'
import logo from '../../../assets/images/nav-logo.png'

export const HeaderContainer = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background: green;
`


export const Logo = styled.div`
  float: left;
  height: 56px;
  width: 100px;
  background-size: contain;
  background-image: url(${logo});
  background-repeat: no-repeat;
`

export const Center = styled.div`
  width: 945px;
  margin: 0 auto;
  background: orange;
`

export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 20px;
  cursor: pointer;
  &.left{ 
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: orange
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  height: 56px;
  .mag {
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    position: absolute;
    font-size:20px;
    right: 8px;
    top: 15px;
    &.active {
      color: white;
      background-color: red;
    }
  }

`

export const SearchInput = styled.input.attrs({
  placeholder: '请输入'
})`
  width: 160px;
  margin-top: 9px;
  border-radius: 19px;
  height: 38px;
  background: #ccc;
  box-sizing: border-box;
  padding: 0 40px 0 20px;
  outline: none;
  border: none;
  font-size: 15px;
  &.active {
    width: 220px;
  }
  transition: all .3s;
`

export const Addition = styled.div`
  position: absolute;
  line-height: 56px;
  right: 0;
`

export const Button = styled.div`
cursor: pointer;
  float: left;
  border: 1px solid orange;
  padding: 0 20px;
  line-height: 38px;
  margin-top: 8px;
  border-radius: 19px;
`
