import React, { useState, useImperativeHandle, forwardRef, Fragment } from "react"
import { Drawer, Tag } from 'antd';
import {
  TwitterOutlined,
} from '@ant-design/icons';

import { Colors, menuList, menuListBtn } from "../json/menu"
import "./head.css"

// 关闭菜单方法   
const onClose = (setVisible) => {
  setVisible(false)
};

// 去登录
const goLogin = (props, setVisible) => {
  setVisible(false);
  props.goLogin();
}

// 菜单组件 
function CreateMenu (props, ref) {

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("去登录")

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    setName: (n) => {
      // 通过 ref  父组件调用设置当前登录昵称
      setName(n);
    }
  }));

  return (

    <Drawer
      title="What would you do?"
      placement="right"
      closable={false}
      onClose={() => onClose(setVisible)}
      visible={visible}
    >
      <div className="menu-head">
        <img src={require("../../../img/head.png")} alt="" />
        <span onClick={() => { goLogin(props, setVisible) }}>{name}</span>
      </div>
      {
        menuListBtn.map((x, y) => {
          return <Tag key={x.text} icon={<TwitterOutlined />} color={Colors[y]}>
            {x.text}
          </Tag>
        })
      }
      {
        menuList.map((i, n) => {
          return <Fragment key={i.code}>
            <div key={i.code} className="menu-list">
              <div className="menu-bg" style={{ background: Colors[n] }}></div>
              <div className="menu-tle">{i.text}</div>
              <div className="menu-bz">{i.number}</div>
            </div>
            <div className="menu-describe">{i.describe}</div>
          </Fragment>
        })
      }

    </Drawer>
  )
}

export default forwardRef(CreateMenu);

