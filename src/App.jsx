import React, { Component } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import  Home from './pages/Home'
import  About from './pages/About'
import MyNavLink from './pages/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
            <div  className="row">
              <div  className="col-xs-offset-2 col-xs-8">
                <div  className="page-header"><h2>React Router Demo</h2></div>
              </div>
            </div>
            <BrowserRouter>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div  className="list-group">
                    {/* 路由链接 */}
                  {/* <MyNavLink to="/"></MyNavLink> */}
                  <MyNavLink to="/about">About</MyNavLink>
                  <MyNavLink to="/home">Home</MyNavLink>
                </div>
              </div>
              <div  className="col-xs-6">
                <div  className="panel">
                  <div  className="panel-body">    
                  <Routes>
                      {/* 注册路由，写入内容 */}
                      <Route path="/"  element={<About/>}></Route>
                      <Route path="/about" element={<About/>}></Route>
                      {/* 如果不加/* ——父路由将不再匹配，因此子路由将永远不会渲染*/}
                      {/*  /*说明子路由*/}
                      <Route path="/home/*" element={<Home/>}></Route>
                  </Routes>
                  </div>
                </div> 
              </div>
            </div>
            </BrowserRouter>
            </div>

        )
    }
}
