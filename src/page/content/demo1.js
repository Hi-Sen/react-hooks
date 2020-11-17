
/*
  React 核心基础知识点 - 生命周期  
*/
import React, { Component } from 'react'
import { prestyle, divstyle } from './style'
import Store from "./store"

class Demo1 extends Component {

  /**
   * @param {初始化阶段} 
   */
  constructor(props) {
    // super 将父组件的 props 注册给子组件      
    super(props);
    console.log("生命周期第一步：初始化")
    this.state = Object.assign({
      num: 1
    }, Store.getState())
  }

  /**
   * @param {挂载阶段} 
   */
  componentWillMount () {
    console.log("生命周期：挂载DOM前")
  }

  render () {
    console.log("render 函数执行")
    return (
      <div style={divstyle}>
        <div>
          props 传入随机值：
          {this.props.random}
          <br />
          <button onClick={this.get}> 点击测试生命周期，控制台查看</button>
          <h3>
            Redux 状态管理值: {this.state.reducer.text}
          </h3>

        </div>
        <div style={prestyle}>
          <p style={{ textAlign: "center", fontSize: "2rem", marginBottom: 0 }}>部分实践代码</p>
          <pre>
            {'\n            \n/*\nReact 核心基础知识点 - 生命周期  \n*/\nimport React, { Component } from \'react\'\n\nclass Demo1 extends Component {\n\n/**\n * @param {初始化阶段} \n */\nconstructor(props) {\n  // super 将父组件的 props 注册给子组件\n  super(props);\n\n  console.log("生命周期第一步：初始化")\n  this.state = {\n    num: 1\n  }\n}\n\n/**\n * @param {挂载阶段} \n */\ncomponentWillMount () {\n  console.log("生命周期：挂载DOM前")\n}\n\nrender () {\n  console.log("render 函数执行")\n  return (\n    <div> props 传入随机值：\n      {this.props.random}\n      <br />\n      <button onClick={this.get}> 点击测试生命周期，控制台查看</button>\n    </div >\n  );\n}\n\ncomponentDidMount () {\n  console.log("生命周期：挂载DOM后")\n}\n\n/**\n * @param {更新阶段} \n*/\n\ncomponentWillReceiveProps (nextProps) {\n\n  // 传入 props 发生了变化 \n  console.log("componentWillReceiveProps：nextProps", nextProps);\n}\n\nshouldComponentUpdate (nextProps, nextState) {\n\n  // props / state  发生变化的时候 \n  // return true / false 来决定是否渲染 render 函数 , 优化作用 \n  // 本质上 ， 组件的 props / state 发生变化就会触发 render 函数重绘  \n\n  console.log("shouldComponentUpdate：生命周期");\n  console.log("shouldComponentUpdate：nextProps", nextProps);\n  console.log("shouldComponentUpdate：nextState", nextState);\n\n  return true;  // 必须 ; 可以是 false ， 不走 render\n}\n\ncomponentWillUpdate () {\n  console.log("componentWillUpdate：生命周期更新前")\n}\n\n// 更新 => render () 渲染  \ncomponentDidUpdate () {\n  console.log("componentDidUpdate：生命周期更新后")\n}\n\ncomponentWillUnmount () {\n  console.log("生命周期：卸载前");\n}\n\n/**\n * 点击测试方法 \n */\nget = () => {\n  console.log(this.props)\n  this.setState({\n    num: 2\n  })\n}\n\n}\n\n\nexport default Demo1;  \n\n         '}
          </pre>

        </div>

      </div >
    );
  }

  componentDidMount () {
    console.log("生命周期：挂载DOM后")
  }

  /**
   * @param {更新阶段} 
  */

  componentWillReceiveProps (nextProps) {

    // 传入 props 发生了变化 
    console.log("componentWillReceiveProps：nextProps", nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {

    // props / state  发生变化的时候 
    // return true / false 来决定是否渲染 render 函数 , 优化作用 
    // 本质上 ， 组件的 props / state 发生变化就会触发 render 函数重绘  

    console.log("shouldComponentUpdate：生命周期");
    console.log("shouldComponentUpdate：nextProps", nextProps);
    console.log("shouldComponentUpdate：nextState", nextState);

    return true;  // 必须 ; 可以是 false ， 不走 render
  }

  componentWillUpdate () {
    console.log("componentWillUpdate：生命周期更新前")
  }

  // 更新 => render () 渲染  
  componentDidUpdate () {
    console.log("componentDidUpdate：生命周期更新后")
  }

  componentWillUnmount () {
    console.log("生命周期：卸载前");
  }

  /**
   * 点击测试方法 
   */
  get = () => {
    console.log(this.props)
    this.setState({
      num: 2
    })
  }

}


export default Demo1;  
