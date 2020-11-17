import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./home.css"

import Nav from "../navgation"
import Content from "../content"

/**
 * 函数式组件 GetLinkList () 
 * 参数 prop 继承父组件的 props 
 * 使用组件的地方需要传递 ，如下
 * <GetLinkList />
 * 返回一段测试路由
 */
function GetLinkList (props) {
  let linkRouteList = [
    { path: "/demo1", text: "生命周期" },
    { path: "/hook", text: "Hook" },
    { path: "/redux", text: "Redux" },
  ]
  return (
    linkRouteList.map(c => {
      return <Link key={c.path} to={c.path}>
        {c.text} &nbsp;&nbsp;
      </Link >
    })
  )
}


/**
 * home 组件 -> content 组件 -> demo2 组件 ， 隔代组件 ， 不用 props 层层传递
 * 使用 context  上下文来传递参数, defaultValue 默认值
 * 使用方式:
 * 顶层父组件创建一个 context 上下文, 返回一个 Provider 和 Consumer 
 * provider : 生产者，用于防止共享数据的地方，接收一个value属性
 * Consumer ： 消费者，用于获取生产者共享的数据 
 * 看代码实际实现 
 */
export const ContextObj = React.createContext();
/**
 * 可以拆分写  
 * const Context = React.createContext("defaultValue");
 * export const Provider = Context.Provider;
 * export const Consumer = Context.Consumer;  
 */

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_param: '',
      contextNum: '测试context上下文传递参数'
    }
  }
  render () {
    return (
      <div>
        <div className="home_head" >
          <h3>React 技术栈 - 打开控制台更香哦</h3>
        </div>
        {/* 内容区域 */}
        <div className="home">
          <div className="nav">
            <Nav get_nav_param={this.nav_click} />
          </div>
          <div className="content">

            <div className="headerStyle">
              Link路由： <GetLinkList />
            </div>

            <div className="content_style">
              <ContextObj.Provider value={this.state.contextNum}>
                <Content random={Math.random()} nav_param={this.state.nav_param} />
              </ContextObj.Provider>
            </div>

          </div>
        </div>
      </div >
    );
  }

  /** 
   * 监听子组件导航点击   
   * setState状态      
   * <Content random={Math.random()}  nav_param={this.state.nav_param} /> 组件重新渲染    
   */
  nav_click = (param) => {
    this.setState({
      nav_param: param
    })
  }

}

export default Home;

