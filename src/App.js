import React from 'react'
// 引入全局样式
import {GlobalStyle} from './style'
import {GlobalIconFontStyle} from './assets/css/iconfont'
// 引入 Provider 
import {Provider} from 'react-redux'
// 引入 store 传入到 Provider
import store from './sotre'
// 引入路由
import {BrowserRouter as Router, Route} from 'react-router-dom'
// 引入组件
import Home from './components/content/header'
function App() {
  return (
    <div className="app">
      <GlobalStyle/>
      <GlobalIconFontStyle/>
      <Provider store={store}>
        <Router>
          <Route component={Home} path="/" exact   />
        </Router>
      </Provider>
      
    </div>
  )
}

export default App