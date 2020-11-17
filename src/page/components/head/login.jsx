import React, { useState } from "react"
import CustomHoc from './customHoc';

// 登录内容
function getContent () {
  return {
    title: "登录",
    okBtn: "确认",
    cancelBtn: "取消",
    label: "用户",
    psdLabel: "密码"
  }
}

// 登录逻辑
function doLoginLogic (obj, props) {
  // obj：邮箱，用户，密码
  // console.log(obj)
  props.closePop(false)
}

// 登录组件 
function LoginComp (props) {
  const [content] = useState(() => getContent())
  return (
    <CustomHoc content={content} isShow={props.isShow} close={(obj) => doLoginLogic(obj, props)} />
  )
}

export default LoginComp;