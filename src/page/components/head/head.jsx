
import React, { useState, useRef } from "react"
import { Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

import "./head.css"
import logo from '../../../logo.svg';
import Register from "./register"
import Login from "./login"
import Menu from "./menu"
import Util from "../../utils"

import EventBus from "../event/eventBus"

// 点击 logo 会列表页
function goContentMain () {
  EventBus.emit("goHome")
}

// 设置元素宽度
const getWidth = () => {
  return Util.getWidth();
}

// 头部组件  
function HeadComp (props) {
  const [isShowRegister, setShowRegsiter] = useState(false);
  const [isShowLogin, setShowLogin] = useState(false);
  const refMenu = useRef(null);

  return (
    <div className="header">
      <div className="header-content" style={{ width: getWidth() }}>
        <div className="head-top-logo" onClick={() => { goContentMain() }}>
          <img src={logo} className="head-logo" alt="logo" />
          <h3 className="head-Title">Hi-Sen 社区 Go Go Go</h3>
        </div>
        <div className="head-btnList">
          <Button onClick={() => setShowRegsiter(true)}>注册</Button>
          <Button type="primary" onClick={() => { setShowLogin(true) }}>登录</Button>
        </div>
        <div className="head-icon">
          <UnorderedListOutlined style={{ fontSize: '2rem' }} onClick={() => { refMenu.current.show() }} />
        </div>

        {/* 注册 */}
        <Register isShow={isShowRegister} closePop={() => setShowRegsiter(false)} />
        {/* 登录 */}
        <Login isShow={isShowLogin} closePop={() => setShowLogin(false)} />
        {/* 菜单 */}
        <Menu goLogin={() => setShowLogin(true)} ref={refMenu} />
      </div>

    </div>
  )
}

export default HeadComp;

