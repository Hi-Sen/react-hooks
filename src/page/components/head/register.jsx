import React, { useState } from "react"
import CustomHoc from './customHoc';

// 注册内容
function getContent () {
  return {
    title: "注册",
    okBtn: "创建新用户",
    cancelBtn: "返回",
    email: "邮箱",
    label: "用户",
    psdLabel: "密码"
  }
}

// 注册逻辑
function RegisterLogic (obj, props) {
  // obj：邮箱，用户，密码
  // console.log(obj)
  props.closePop(false)
}

// 注册组件
function RegisterComp (props) {
  const [content] = useState(() => getContent())
  return (
    <CustomHoc content={content} isShow={props.isShow} close={(obj) => RegisterLogic(obj, props)} />
  )
}

export default RegisterComp;