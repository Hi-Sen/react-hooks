import React, { Component } from "react"
import { Menu } from 'antd';
import './navgation.css'

const { SubMenu } = Menu;
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "sub1", title: "React", childs: [
            { key: "1-1", title: "生命周期", com: "demo1" },
            { key: "1-2", title: "Context ,Refs ", com: "demo2" },
            { key: "1-3", title: "Fragment , Hoc", com: "demo3" },
            { key: "1-4", title: "Portals ", com: "demo4" },
            { key: "1-5", title: "Hooks ", com: "hook" },
            { key: "1-6", title: "Redux ", com: "redux" }
          ]
        }
      ]
    }
  }
  render () {
    return (
      <Menu
        style={{ width: '16vw' }}
        defaultSelectedKeys={['1-1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        onClick={this.handleClick}
      >
        {
          this.state.data.map((i, n) => {
            return (
              <SubMenu
                key={i.key}
                title={
                  <span>
                    <span className="big_title">{i.title}</span>
                  </span>
                }
              >
                {
                  i.childs.map((x, y) => {
                    return (
                      <Menu.Item className="little_title" key={x.key}> {x.title} </Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu >
    );
  }

  /**
   * 导航点击事件
   * 向上广播方法 get_nav_param 并传参 x 
   * 父组件监听
   */
  handleClick = (e) => {
    this.state.data.forEach((i, n) => {
      if (e.keyPath[1] === i.key) {
        i.childs.forEach((x, y) => {
          if (e.key === x.key) {
            this.props.get_nav_param(x);
          }
        })
      }
    })
  }
}

export default Nav;

