import React, { Fragment } from 'react';
// styled-components 创建的 全局样式
import { GlobalStyle } from './style';
import { GlobalIconFontStyle } from '../src/assets/css/iconfont';
//  引入 Provider
import { Provider } from 'react-redux';
// 引入总的 store
import store from './store';
// 不同页面组件
import Home from './views/home';
// 路由
// 如何使用 https://reacttraining.com/react-router/web/guides/quick-start
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      {/* 这里引入style */}
      <GlobalStyle />
      <GlobalIconFontStyle />
      <Provider store={store}>
        <Router>
          <Route path='/' component={Home}></Route>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
